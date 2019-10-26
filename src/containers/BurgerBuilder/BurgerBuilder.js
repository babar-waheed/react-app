import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-order';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.4,
    bacon: 1.5
};

class BurgerBuilder extends Component{

    state = {
        ingredients: null,
        totalPrice: 5,
        purchasable: false,
        purchasing: false,
        loading: false,
        burgerLoading: false
    };

    componentDidMount() {
        this.setState({
            burgerLoading: true
        });
        axios.get('/ingredients.json')
            .then(response => {
                this.setState({
                    ingredients: response.data,
                    burgerLoading: false
                })
            })
            .catch(error => {})
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key]
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);

        this.setState({ purchasable: sum > 0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) return;
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceDeduction;

        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients
        });

        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({purchasing: true})
    };

    closeModal = () => {
        this.setState({purchasing: false})
    };

    purchaseContinueHandler = () => {

        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: 'John Citizen',
                address: {
                    street: 'Virtual Street',
                    zip: '9000'
                }
            }
        };

        axios.post("/orders.json", order)
            .then(response => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            })
            .catch(error => {
                this.setState({
                    loading: false,
                    purchasing: false
                });
            })
    };

    render() {

        const disabledInfo = {
            ...this.state.ingredients,
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        const orderSummary = !this.state.loading && this.state.ingredients ?

            <OrderSummary
                ingredients={this.state.ingredients}
                cancelled={this.closeModal}
                continue={this.purchaseContinueHandler}
                price={this.state.totalPrice}
            /> :
            <Spinner /> ;

        const burgerComponents = !this.state.burgerLoading && this.state.ingredients ?
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
            </Aux>
             : <Spinner/>;

        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.closeModal}
                >
                    {orderSummary}

                </Modal>
                {burgerComponents}
            </Aux>
        )
    }
}

export default withErrorHandler(BurgerBuilder, axios);
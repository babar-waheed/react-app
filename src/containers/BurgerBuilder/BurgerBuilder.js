import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-order';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';

class BurgerBuilder extends Component{

    state = {
        purchasable: false,
        purchasing: false,
        loading: false,
        burgerLoading: false
    };

    componentDidMount() {

        console.log(this.props);

        // this.setState({
        //     burgerLoading: true
        // });
        // axios.get('/ingredients.json')
        //     .then(response => {
        //         this.setState({
        //             ingredients: response.data,
        //             burgerLoading: false
        //         })
        //     })
        //     .catch(error => {})
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients)
            .map(key => {
                return ingredients[key]
            }).reduce((sum, el) => {
                return sum + el;
            }, 0);

        return sum > 0
    }

    purchaseHandler = () => {
        this.setState({purchasing: true})
    };

    closeModal = () => {
        this.setState({purchasing: false})
    };

    purchaseContinueHandler = () => {
        this.props.history.push('/checkout');

    };

    render() {
        console.log("this.props.ings", this.props.ingredients);
        const disabledInfo = {
            ...this.props.ingredients,
        };

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        const orderSummary = !this.state.loading && this.props.ingredients ?

            <OrderSummary
                ingredients={this.props.ingredients}
                cancelled={this.closeModal}
                continue={this.purchaseContinueHandler}
                price={this.props.totalPrice}
            /> :
            <Spinner /> ;

        const burgerComponents = !this.state.burgerLoading && this.props.ingredients ?
            <Aux>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls
                    addIngredient={this.props.onIngredientAdded}
                    removeIngredient={this.props.onIngredientRemoved}
                    disabled={disabledInfo}
                    price={this.props.totalPrice}
                    purchasable={this.updatePurchaseState(this.props.ingredients)}
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

const mapStateToProps = state => {
    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
};

const mapDispatchToProps = dispatch => {

    console.log(dispatch);

    return {
        onIngredientAdded: (ingName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingName}),
        onIngredientRemoved: (ingName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingName})

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
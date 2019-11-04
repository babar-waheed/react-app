import React, {Component} from 'react';
import { connect } from "react-redux";
import Button from '../../../components/UI/Button/Button';
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from './ContactData.css';
import axios from '../../../axios-order';
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component{

    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            zipCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                value: ''
            }
        },
        loading: false
    };

    orderHandler = (event) => {

        event.preventDefault();

        const orderData = {};
        for(let identifier in this.state.orderForm){
            if(this.state.orderForm.hasOwnProperty(identifier)){
                orderData[identifier] = this.state.orderForm[identifier].value;
            }
        }

        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: orderData
        };

        axios.post("/orders.json", order)
            .then(response => {
                this.setState({
                    loading: false
                });

                this.props.history.push('/');

            })
            .catch(error => {
                this.setState({
                    loading: false
                });
            })

    };

    inputChangeHandler = (event, inputIdentifier) =>{

        const updatedOrderForm = {
            ...this.state.orderForm
        };

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        this.setState({
            orderForm: updatedOrderForm
        });

    };

    render () {
        const formElementArray = [];

        for(let key in this.state.orderForm){
            if(this.state.orderForm.hasOwnProperty(key)){
                formElementArray.push({
                    id: key,
                    config: this.state.orderForm[key]
                })
            }
        }

        const form = this.state.loading ?
            <Spinner/> :
            <form>
                {formElementArray.map(formElement => (

                    <Input elementType={formElement.config.elementType}
                           elementConfig={formElement.config.elementConfig}
                           value={formElement.config.value}
                           change={(event) => this.inputChangeHandler(event,formElement.id)}
                           key={formElement.id}
                    />

                ))}


                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>

            </form>;

        return (
            <div className={classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

const mapStateToProps = state => {

    console.log(state);

    return {
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    }
};

export default connect(mapStateToProps)(ContactData);
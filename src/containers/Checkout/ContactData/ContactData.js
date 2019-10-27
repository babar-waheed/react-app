import React, {Component} from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from './ContactData.css';
import axios from '../../../axios-order';

class ContactData extends Component{

    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({
            loading: true
        });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'John Citizen',
                email: 'john@citizen.com',
                address: {
                    street: 'Virtual Street',
                    zip: '9000',
                    country: 'Australia'
                }
            },
            deliveryMethod: 'Express'
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

    render () {
        const form = this.state.loading ?
            <Spinner/> :
            <form>

                <input type="text"
                       // value={this.state.customer.name}
                       // onChange={(event) => this.setState({
                       //
                       // })}
                       className={classes.Input}
                       name="name"
                       placeholder="Your Name:"
                />
                <input type="text" className={classes.Input} name="email" placeholder="Email:" />
                <input type="text" className={classes.Input} name="street" placeholder="Street:" />
                <input type="text" className={classes.Input} name="postal" placeholder="Postcode:" />

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

export default ContactData;
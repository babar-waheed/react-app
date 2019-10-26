import React from 'react';
import Aux from '../../hoc/Aux';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(key =>{
            return <li key={key}>{key}: {props.ingredients[key]}</li>
        });
    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious burger with the following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>

            <p>Continue to Checkout</p>
        </Aux>
    )
};

export default orderSummary;
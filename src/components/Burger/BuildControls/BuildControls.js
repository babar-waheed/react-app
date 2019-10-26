import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: {props.price.toFixed(2)}</p>
        {controls.map(ctrl => (
            <BuildControl
                    key={ctrl.type}
                    label={ctrl.label}
                    add={() => props.addIngredient(ctrl.type)}
                    remove={() => props.removeIngredient(ctrl.type)}
                    disabled={props.disabled[ctrl.type]}
                />
            )
        )}

        <button
            className={classes.OrderButton}
            disabled={!props.purchasable}
        >Order Now</button>

    </div>
);



export default buildControls;
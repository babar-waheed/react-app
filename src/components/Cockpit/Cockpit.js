import React from 'react';
import Style from "./Cockpit.css";

const cockpit = (props) => {
    return(
        <div className={Style.Cockpit}>
            <h1 >{props.title} {props.counter}</h1>
            <button
                className={Style.bold}
                onClick={props.toggleHandler}>Toggle Person
            </button>
        </div>
    )
};

export default cockpit;
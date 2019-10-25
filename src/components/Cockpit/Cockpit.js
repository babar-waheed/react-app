import React, {useEffect} from 'react';
import Style from "./Cockpit.css";

const Cockpit = (props) => {
    useEffect(()=> {
        console.log('useEffect');

        return () => {
            console.log('useEffect cleanup work')
        }
    }, []); //[] = load only once [props.person] = load every time person object is changed.
    return(
        <div className={Style.Cockpit}>
            <h1 >{props.title}</h1>
            <p>Click the button below to display List of persons</p>
            <p>Total: {props.counter}</p>
            <button
                className={Style.bold}
                onClick={props.toggleHandler}>Toggle Person
            </button>
        </div>
    )
};

export default Cockpit;
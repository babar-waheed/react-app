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
            <h1 >{props.title} {props.counter}</h1>
            <button
                className={Style.bold}
                onClick={props.toggleHandler}>Toggle Person
            </button>
        </div>
    )
};

export default Cockpit;
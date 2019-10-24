import React from 'react';
import Style from './Persons.css';

console.log(Style);
const persons = (props) => {

    return (
        <div className={Style.Person}>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
            {/*children refers to any element inside the opening and closing tags e.g below*/}
            {/*<Person name="John" age="34"> My Hobbies: Coding </Person>*/}
            <p>{props.children}</p>
            <input onChange={props.change} type="text" name="name" value={props.name} />
        </div>
    )
};

export default persons;
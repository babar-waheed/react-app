import React from 'react';

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
            {/*children refers to any element inside the opening and closing tags e.g below*/}
            {/*<Person name="John" age="34"> My Hobbies: Coding </Person>*/}
            <p>{props.children}</p>
        </div>
    )
};

export default person;
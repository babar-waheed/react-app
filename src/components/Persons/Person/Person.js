import React, {Component, Fragment} from 'react';
import Style from './Person.css';
import Aux from '../../../hoc/Aux';
import WithClass from '../../../hoc/WithClass';

class Person extends Component {
    render(){
        console.log('[Person.js render()]');

        return(
            <Aux>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                {/*children refers to any element inside the opening and closing tags e.g below*/}
                {/*<Person name="John" age="34"> My Hobbies: Coding </Person>*/}
                <p>{this.props.children}</p>
                <input onChange={this.props.change} type="text" name="name" value={this.props.name} />
            </Aux>
        )
    }
}

export default Person;
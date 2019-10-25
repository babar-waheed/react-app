import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Style from './Person.css';
import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {

    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        console.log('[Person.js render()]');

        return(
            <Aux>
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authenticated!</p> : <p>Not logged In</p>}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old.</p>
                {/*children refers to any element inside the opening and closing tags e.g below*/}
                {/*<Person name="John" age="34"> My Hobbies: Coding </Person>*/}
                <p key="i2">{this.props.children}</p>
                <input
                    key="i3"
                    //ref={(inputEl) => {this.inputElement = inputEl}}
                    ref={this.inputElementRef}
                    onChange={this.props.change}
                    type="text"
                    name="name"
                    value={this.props.name}
                />
            </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    change: PropTypes.func
};

export default withClass(Person, Style.Person);
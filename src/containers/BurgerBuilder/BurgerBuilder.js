import React, {Component} from 'react';
import Aux from '../../components/hoc/Aux';
import Burger from '../../components/Burger/Burger';

class BurgerBuilder extends Component{

    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 1
        }
    };

    render() {
        return (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <div>Build Control</div>
            </Aux>
        )
    }
}

export default BurgerBuilder;
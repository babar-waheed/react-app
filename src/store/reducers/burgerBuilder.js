import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    ingredients: null,
    totalPrice: 5,
    error: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.4,
    bacon: 1.5
};

const reducer = (state = initialState, action) => {
    console.log(action);

    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            console.log(state.ingredients[action.ingredientName]);
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.FETCH_INGREDIENT:
            return {
                ...state,
                ingredients: action.ingredients

            };
        case actionTypes.FETCH_INGREDIENT_FAILED:
            return{
              ...state,
                error: true
            };
        default:
            return state;
    }
};

export default reducer;
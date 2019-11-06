import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';

export const addIngredients = (name) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: name
    }
};

export const removeIngredients = (name) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: name
    }
};

export const ingredientsFailed = () => {
    return {
        type: actionTypes.FETCH_INGREDIENT_FAILED
    }
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.FETCH_INGREDIENT,
        ingredients: ingredients
    }
};

export const initIngredients = () => {
    return dispatch => {
        axios.get('/ingredients.json')
            .then(response => {
                console.log(response.data);
                dispatch(setIngredients(response.data))
            })
            .catch(error => {
                dispatch(ingredientsFailed())
            })
    }
};
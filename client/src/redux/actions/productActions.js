import axios from 'axios'
import * as actionTypes from '../constants/productConstants'


const URL = 'http://localhost:8000';




//what the value we get from database we will dispatch that value and dispatch function internally call our reducer function that is getProductsReducer , so we will call our api with the help of middleware   {async (dispatch)=>}
export const getProducts = () => async (dispatch) => {

    try {
        const { data } = await axios.get(`${URL}/products`);
        console.log("getproduxts",data);

        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    }
    catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message })

    }
}




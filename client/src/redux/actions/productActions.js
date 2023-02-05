import axios from 'axios'
import * as actionTypes from '../constants/productConstants.js'




const URL = 'http://localhost:8000';






//what the value we get from database we will dispatch that value and dispatch function internally call our reducer function that is getProductsReducer , so we will call our api with the help of middleware   {async (dispatch)=>}
export const getProducts = () => async (dispatch) => {

    try {
        const { data } = await axios.get(`${URL}/products`);

        //console.log("daata from backend",data);
        // dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
        dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });

    }
    catch (error) {
        // console.log("catch chal rah hai")
        dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message })

    }
}


export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`${URL}/product/${id}`);
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_FAIL, payload: error.message })

    }

}



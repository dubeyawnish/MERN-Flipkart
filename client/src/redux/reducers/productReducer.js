import * as actionType from '../constants/productConstants'






//in state previous vallue is stord and in action current value is stored
export const getProductsReducer = (state = { products: [] }, action) => {
  console.log("this is state," ,action);
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return { products: action.paylaod }

        case actionType.GET_PRODUCTS_FAIL:
            return { error: action.paylaod }

        default:
            return state
    }

}
import * as actionType from '../constants/productConstants'






//in state previous vallue is stord and in action current value is stored
export const getProductsReducer = (state = {products:[]}, action) => {
    //console.log("reducer state  ====> >", state);
    //console.log("reducer action ==========>", action);
   // console.log("updated action payload===========>",action.payload)


    switch (action.type) {


        case actionType.GET_PRODUCTS_SUCCESS:
            //console.log("action type successfull")
            state=action.payload
            //console.log("updated action payload===========>",action.payload)
            return {products:action.payload}

        case actionType.GET_PRODUCTS_FAIL:
            //console.log("action type failure")
            return { error: action.payload }


        default:
            return state


    }


}

export const getProductDetailsReducer =(state={product:{}},action)=>{
    switch(action.type){
        case actionType.GET_PRODUCT_DETAILS_REQUEST:
            return {loading:true}
        
        case actionType.GET_PRODUCT_DETAILS_SUCCESS:
            return {loading:false,product:action.payload}

        case actionType.GET_PRODUCT_DETAILS_FAIL:
            return {loading:false,error:action.payload}

        case actionType.GET_PRODUCT_DETAILS_RESET:
             return {product:{}}

        default:
             return state
        }
}
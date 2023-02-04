
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";


const DetailsView=()=>{
const dispatch=useDispatch();

// if we want to take any thing from website url then we need useParams
const { id }=useParams();


const {loading,product}= useSelector(state=>state.getProductDetails);





useEffect(() => {
   if (product && id !== product.id)
    dispatch(getProductDetails(id));

  
}, [dispatch,id,product,loading])




    return (
        <div>
           <h1>hello</h1> 
        </div>
    )
}


export default DetailsView;
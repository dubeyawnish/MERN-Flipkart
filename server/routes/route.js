import express from 'express'
import { userSignup ,userLogin} from '../Controller/user-controller.js';
import { getProducts } from '../Controller/product-controller.js';


const router=express.Router();

router.post('/signup',userSignup);
router.post('/login',userLogin);
router.get('/products',getProducts);


export default router;
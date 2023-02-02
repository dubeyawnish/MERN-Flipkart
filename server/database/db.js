import mongoose from "mongoose";
import dotenv from "dotenv";
mongoose.set('strictQuery', false);
dotenv.config();
const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

const Connection =async()=>{
    const URL=`mongodb+srv://${username}:${password}@e-commerce.pjioxvy.mongodb.net/?retryWrites=true&w=majority`
    try{
          await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
          console.log('Database connected successfully');
    }
    catch(error){
        console.log('error while connectin with database',error.message);
    }
}

export default Connection;
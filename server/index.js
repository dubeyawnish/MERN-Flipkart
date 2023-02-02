import express from "express"
import Connection from './database/db.js'
import DefaultData from './default.js'

const app =express();


const PORT=process.env.PORT || 8000;
Connection();

app.listen(PORT,()=> console.log(`Server is successfully running on PORT ${PORT}`));

DefaultData();
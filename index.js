const express=require('express')
const app=express()
const dotenv=require('dotenv')
const connectDB = require('./config/db');
const productRoute=require('./Route/productRoute');



dotenv.config();
//body parser
app.use(express.json());
connectDB()
const port=3000;
app.use('/api',productRoute)

app.get('/',(req,res)=>{
    res.send("hello world!!")
})


app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
require('dotenv').config();
const express = require('express');
const registrationRoute =  require('./Routes/registration');

//epress app
const app =express();

//midleware
app.use((req,res,next)=>{

 console.log(req.path,req.method);
 next()
});

//route
app.use(express.jason())
app.use('/api/registration',registrationRoute)
app.get('/',(req,res)=>{
    res.json({mssg:'welcome to the app'});
})


//listen for request
const port =process.env.PORT
app.listen(port,()=>{
    console.log("jj");
    
})
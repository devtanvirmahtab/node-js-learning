const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleWare = (req,res,next)=>{
    console.log("Middleware function");
    next();
};

app.get("/",myMiddleWare,(req,res)=>{
    console.log("I am home");
    res.send("<h1> I am home route</h2>");
});

app.listen(PORT,() => {
    console.log(`Server is runnig http://localhost:${PORT}`);
});
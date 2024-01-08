const express = require("express");
const app = express();

app.get("/product/:id([0-9]{5})",(req,res)=>{
    res.send(`<h2> ID is = ${req.params.id} </h2>`);
});

app.get("/product/:title([a-zA-Z]+)",(req,res)=>{
    res.send(`<h2> ID is = ${req.params.title} </h2>`);
});

app.use("*",(req,res)=>{
    res.status(404).send(
        {
            message: 'not a valid route',
        }
    )
});

app.listen(3000,()=>{
    console.log("server running is http://localhost:3000");
});
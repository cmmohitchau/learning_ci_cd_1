import express from "express";

const app = express();

app.get("/" , (req , res) => {

    res.status(200).json({
        message : "server is healthy"
    })
})

app.listen(3002 , () => {
    console.log("app is running on port ", 3002);
    
})
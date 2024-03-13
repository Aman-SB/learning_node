import express from "express";

const app = express();

app.get('/api/jokes' , (req,res) => {
    const jokes = [
        {
            id : 1,
            title : "jokes1" ,
            content : "this is jokes", 
        },
        {
            id : 2,
            title : "jokes1" ,
            content : "this is jokes", 
        },
        {
            id : 3,
            title : "jokes1" ,
            content : "this is jokes", 
        },
        {
            id : 4,
            title : "jokes1" ,
            content : "this is jokes", 
        },
        {
            id : 5,
            title : "jokes1" ,
            content : "this is jokes", 
        },
    ]

    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port , ()=> {
    console.log("Server is ready");
})
// const express  = require('express');
import express from 'express';

const app = express();
const PORT: number = 8080;


app.get('/', (req, res)=>{
    res.send("Hello World updated");
})

app.get('/hoidanit', (req, res)=>{
    res.send("Hello Ha");
})

app.listen(8080,()=>{
    console.log(`Server is running on port: ${PORT}`);
})
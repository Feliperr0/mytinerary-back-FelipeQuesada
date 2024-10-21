import express from "express";
import "dotenv/config.js"
import "./config/database.js"


const server = express ()
const PORT = process.env.PORT
const ready =() => console.log ('Server ready in port: ' +PORT)
server.get('/saludo', (req,res) => {
    res.send('Hola Mundo en express')
})
server.listen(PORT, ready)


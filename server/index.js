const express=require("express")
require('dotenv').config()
const cors=require('cors')
const dbconnect = require("./config/dbconnect")
const app=express()
app.use(cors({
    origin: process.env.CLIENT_URL
}))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
const PORT=process.env.PORT || 7777
dbconnect()
app.listen(PORT, ()=>console.log("server ready"+PORT))

import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config()

const app = express()
app.get("/",(req,res)=>{
    res.send("<h1>HALLO SERVER</h1>")
})

app.use('/api/auth',)
const PORT = process.env.PORT || 5555
app.listen(PORT,()=>{
     console.log(`app running on port ${PORT}`)
})





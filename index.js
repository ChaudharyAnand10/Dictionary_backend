import express from "express"
import mongoose from "mongoose"
import router from "./routes/wordRoutes.js";
import cors from "cors"

const app = express();

app.use(cors())
app.use(express.json())
const PORT = 4000;

app.use("/api",router)

mongoose.connect("mongodb://127.0.0.1:27017/dictionaryDB")
.then(()=>{
    console.log(" mongodb connected");

    app.listen(PORT,(req,res)=>{
        console.log("server running on port 4000")
    })
})
.catch((error)=>{
    console.log("mongodb connection error : " ,error)
})
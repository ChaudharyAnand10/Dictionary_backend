import express from "express"
import mongoose from "mongoose"
import router from "./routes/wordRoutes.js";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config()


const app = express();

app.use(cors())
app.use(express.json())
const PORT = process.env.PORT;

app.use("/api",router)

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    console.log(" mongodb connected");

    app.listen(PORT,(req,res)=>{
        console.log("server running on port 4000")
    })
})
.catch((error)=>{
    console.log("mongodb connection error : " ,error)
})
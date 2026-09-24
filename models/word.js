import mongoose from "mongoose"


const wordSchema = new  mongoose.Schema({
    word:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
    },
    frequency:{
        type:Number,
        default:1
    }
})

const Word  =  mongoose.model("Word",wordSchema)
export default Word
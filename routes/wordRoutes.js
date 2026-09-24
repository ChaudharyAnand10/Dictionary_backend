import Word from "../models/word.js";
import express from "express"


const router = express.Router();


router.get("/search",async(req,res)=>{
     const word = req.query.word?.toLowerCase();

     const result = await Word.findOne({word});
     if(!result){
        return res.json({
            result : "not found"
        })
     }
     result.frequency+=1;
     await result.save();

     res.json({
        result:"found"
     });


})


router.get("/suggest",async(req,res)=>{
    const prefix = req.query.prefix?.toLowerCase();

    const k = Number(req.query.k) || 5;

    const suggestions = await Word.find({
        word:{
            $regex: "^" + prefix
        }
    }).sort({
        frequency:-1,
        word:1
    }).limit(k);

    res.json(suggestions);
});


router.post("/words",async(req,res)=>{
    console.log(req.body)
    const word = req.body.word?.toLowerCase();

    const existingWord =await Word.findOne({word})

    if(existingWord){
        return res.json({
            message:"already existes"
        })
    }

    await Word.create({
        word
    })

    res.json({
        message:"word added successfully"
    })

})

export default router 
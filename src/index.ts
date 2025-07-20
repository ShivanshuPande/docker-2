import express from "express";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient()
const app = express();
app.use(express.json());

app.get("/" ,async (req, res)=>{
    try{
        const response = await client.user.findFirst();
        res.json(response)
    }catch(error){
        console.log(error)
    }
   
})

app.post("/" , async (req , res)=>{
    await client.user.create({
        data: {
            username : req.body.name
        }
    })
    res.json({
        message :"You are successfully logged in !!!!"
    })
})

app.listen(3000);
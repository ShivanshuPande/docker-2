import express from "express";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient()
const app = express();
app.use(express.json());

app.get("/" , (req, res)=>{
    res.json({
        message : "well ,hi there"
    })
})

app.post("/" , async (req , res)=>{
    await client.user.create({
        data: {
            name : req.body.name
        }
    })
    res.json({
        message :"You are successfully logged in !!!!"
    })
})
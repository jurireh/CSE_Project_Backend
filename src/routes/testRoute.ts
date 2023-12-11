import express from "express";
import { createTest } from "../service/test";

const testRouter = express.Router();

testRouter.post("/",
async(req,res,next)=>{
    try{
        await createTest({owner: req.body.owner,name: req.body.name})
        res.sendStatus(201);
    }catch(err){
        res.status(400);
        next(err);
    }
})
export default testRouter;
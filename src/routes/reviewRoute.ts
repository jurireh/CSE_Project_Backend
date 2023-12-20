import express from "express";
import { createReview, getReview } from "../service/ReviewService";

const reviewRouter = express.Router();

reviewRouter.get("/:id",
async(req,res,next)=>{
    try{
        const review = await getReview(req.params.id);
        res.status(200);
        res.send(review);
    }catch(err){
        res.status(400);
        next(err);
    }
})
reviewRouter.post("/",
async(req,res,next)=>{
    try{
        await createReview(req.body);
        res.status(201);
    }catch(err){
        res.status(400);
        next(err);
    }
})

export default reviewRouter;
import express from "express";
import { getAllReviews } from "../service/ReviewService";

const reviewsRouter = express.Router();

reviewsRouter.get("/:id",async (req,res,next) => {
    try{
        const reviews = await getAllReviews(req.params.id);
        res.send(reviews);
    }catch(err){
        res.status(404);
        next(err);
    }
})

export default reviewsRouter;
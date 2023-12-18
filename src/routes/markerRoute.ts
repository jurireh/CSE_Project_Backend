import express from "express";
import { createMarker } from "../service/MarkerService";

const markerRouter = express.Router();

markerRouter.get("/",
async(req,res,next)=>{
    try{
        await createMarker(req.body)
        res.sendStatus(201);
    }catch(err){
        res.status(400);
        next(err);
    }
})
export default markerRouter;
import express from "express";
import { getAllMarkers } from "../service/MarkerService";

const markersRouter = express.Router();

markersRouter.get("/",async (req,res,next)=>{
    try{
        
        const markers = await getAllMarkers();
        res.send(markers);
    }catch(err){
        res.status(404);
        next(err);
    }
})

export default markersRouter;
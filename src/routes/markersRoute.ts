import express from "express";
import { getAllMarkers } from "../service/MarkerServiceGetAll";

const markersRouter = express.Router();

markersRouter.get("/",async (req,res,next)=>{
    try{
        
        const markers = await getAllMarkers();
        console.log("router" +markers);
        res.send(markers);
    }catch(err){
        res.status(404);
        next(err);
    }
})

export default markersRouter;
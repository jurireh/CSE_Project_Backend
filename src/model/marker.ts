import { Schema, model } from "mongoose";

export interface IMarker{
    latitude: number;
    longitude:number;
    name:string;
    description: string;
    label: string;
}

const MarkerSchema = new Schema<IMarker>({
    latitude: {type: Number, required: true },
    longitude: {type: Number, required: true },
    name: {type: String, required: true},
    description: {type: String, required: true},
    label: {type: String,required: true}     
});

export const Marker = model("Marker",MarkerSchema)
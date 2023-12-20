import { Schema, model } from "mongoose";

export interface IReview{
    markerId: string;
    title: string;
    description: string;
    rating: number;
}

const ReviewSchema = new Schema<IReview>({
    markerId: {type: String, required: true},
    title: {type:String,required: true},
    description: {type:String,required: true},
    rating: {type: Number, required: true}
});

export const Review = model("Review", ReviewSchema);
import { Schema, model } from "mongoose";

export interface ITest{
    owner: string;
    name: string;
}

const TestSchema = new Schema<ITest>({
    owner: {type: String, required: true},
    name: {type: String}
});

export const Test = model("Test",TestSchema);
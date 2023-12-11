import dotenv from "dotenv";
import mongoose from "mongoose";
import http from "http";
import app from "./app";


dotenv.config();

const mongoConnection = process.env.DB_CONNECTION_URL;

export async function connectMongo() {
    let db;
    if(!db){
        if(mongoConnection){
        await mongoose.connect(mongoConnection);
        }
        db = mongoose.connection;
    }else{
        return db;
    }
}

export async function closeMongo() {
    await mongoose.connection.close();
}
connectMongo();

const port = process.env.HTTP_PORT ? parseInt(process.env.HTTP_PORT) : 3000;
        const httpServer = http.createServer(app);
        httpServer.listen(port, () => {
           console.log(`Listening for HTTP at http://localhost:${port}`);
        })
import express from 'express';
//import cookieParser from 'cookie-parser';
import testRouter from "./routes/testRoute"
import "express-async-errors";
import cors from "cors";
import markerRouter from './routes/markerRoute';
import markersRouter from './routes/markersRoute';

const app = express();

app.use(cors());
app.use('*',express.json());
app.use(express.urlencoded({extended: true}));
//app.use(cookieParser());

app.use("/test",testRouter);
app.use("/marker",markerRouter);
app.use("/markers",markersRouter);
export default app;
import express from 'express';
//import cookieParser from 'cookie-parser';
import "express-async-errors";
import cors from "cors";
import markerRouter from './routes/markerRoute';
import markersRouter from './routes/markersRoute';
import reviewRouter from './routes/reviewRoute';
import reviewsRouter from './routes/reviewsRoute';

const app = express();

app.use(cors());
app.use('*',express.json());
app.use(express.urlencoded({extended: true}));
//app.use(cookieParser());

app.use("/marker",markerRouter);
app.use("/markers",markersRouter);
app.use("/review",reviewRouter)
app.use("/reviews",reviewsRouter);
export default app;
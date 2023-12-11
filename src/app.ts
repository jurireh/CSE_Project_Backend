import express from 'express';
//import cookieParser from 'cookie-parser';
import testRouter from "./routes/testRoute"
import "express-async-errors";

const app = express();

app.use('*',express.json());
app.use(express.urlencoded({extended: true}));
//app.use(cookieParser());

app.use("/test",testRouter);

export default app;
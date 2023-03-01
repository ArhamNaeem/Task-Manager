import express from "express";
import  taskRouter  from './routes/Tasks';
import { connectDB } from './db/connect';
import dotenv from 'dotenv';
import asyncErrors from 'express-async-errors';
import errorHandlerMiddleware from './middleware/error-handler'
const app = express();

dotenv.config();

const port = process.env.PORT || 3000 


app.use(express.json());
app.use('/api/v1/task',taskRouter)
app.use(errorHandlerMiddleware)
//db
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Listening on port ${port}...`)
        })
    }
    catch (e) {
        console.log(`Error ${e}, ${process.env.MONGO_URI}`);
    }
}



start();
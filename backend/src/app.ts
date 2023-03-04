import express from "express";
import  taskRouter  from './routes/Tasks';
import { connectDB } from './db/connect';
import dotenv from 'dotenv';
<<<<<<< HEAD
import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from './middleware/error-handler';
import setHeadeMiddleware from './middleware/set_header'

=======
import asyncErrors from 'express-async-errors';
import errorHandlerMiddleware from './middleware/error-handler'
>>>>>>> 484a5a2 (worked on error handlers)
const app = express();
dotenv.config();
<<<<<<< HEAD
app.use(setHeadeMiddleware);
app.use(express.json());
app.use("/api/v1/task", taskRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000


=======

const port = process.env.PORT || 3000 


app.use(express.json());
app.use('/api/v1/task',taskRouter)
app.use(errorHandlerMiddleware)
>>>>>>> 484a5a2 (worked on error handlers)
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
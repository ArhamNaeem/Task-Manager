import express from "express";
import  taskRouter  from './routes/Tasks';
import { connectDB } from './db/connect';
import dotenv from 'dotenv';
import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from './middleware/error-handler';
import setHeadeMiddleware from './middleware/set_header'

const app = express();
dotenv.config();

const port = process.env.PORT || 3000 


app.use(express.static("public"));
app.use(express.json());
app.use(setHeadeMiddleware);
app.use("/api/v1/task", taskRouter);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
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
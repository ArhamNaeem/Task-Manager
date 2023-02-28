import express from "express";
import  taskRouter  from './routes/Tasks';
const app = express();

const port = 5000

app.use(express.json());
app.use('/api/v1/task',taskRouter)

//db
const start = (url) => {
    
}

app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
})


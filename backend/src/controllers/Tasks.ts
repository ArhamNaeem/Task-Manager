import express from 'express';
export const getAllTasks = (req:express.Request, res:express.Response) => {
    res.send('all tasks')
}
export const getTask = (req:express.Request, res:express.Response) => {
    res.send('get a task')
}
export const createTask = (req:express.Request, res:express.Response) => {
    res.send("create task");    
}
export const updateTask = (req:express.Request, res:express.Response) => {
    res.send("update task"); 
}
export const deleteTask = (req:express.Request, res:express.Response) => {
    res.send("delete task"); 
}
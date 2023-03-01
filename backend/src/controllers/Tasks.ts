import express from 'express';
import { StatusCodes} from 'http-status-codes';
import { model as Tasks } from '../models/Task';
import {notFound} from '../errors/not-found';
 export const getAllTasks = async (req: express.Request, res: express.Response) => {
    //TODO: handle errors and edge cases
    try {
        const task = await Tasks.find({}).sort('createdAt')
        res
          .status(StatusCodes.OK)
          .json({ success: true, task });
        
    } catch (e) {
        console.log('error in get all tasks')
    }
}
export const getTask = async (req:express.Request, res:express.Response) => {
    // try {
        const { id } = req.params
        console.log(req.params)
    const task = await Tasks.findOne({ _id: id });
    if (!task) {
        throw new notFound('error hyeah')
    }
        res.status(StatusCodes.OK).json({ success: true, task });
    // } catch (e) {
    //   console.log("error in get a task");
    // }
}
export const createTask = async (req:express.Request, res:express.Response) => {
    try {
       const task =  await Tasks.create(req.body);
        res.status(StatusCodes.CREATED).json({success:true,msg:"Task created!"})
    } catch (e) {
        console.log('error!!!')
     }
}
export const updateTask = async (req:express.Request, res:express.Response) => {
    try {

        const { id } = req.params;
        const task = await Tasks.findByIdAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
        res.status(StatusCodes.OK).json({success:true,task})
     } catch (e) {
       console.log("error in update tasks");
     }
}
export const deleteTask = async (req:express.Request, res:express.Response) => {
    try {
         const {id} = req.params
        await Tasks.findByIdAndRemove({ _id: id });
        res.status(StatusCodes.OK).json({success:true,msg:"Task deleted"})
     } catch (e) {
       console.log("error in delete task");
     }
}
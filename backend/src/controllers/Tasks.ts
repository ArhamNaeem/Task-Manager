import express from 'express';
import { StatusCodes} from 'http-status-codes';
import { model as Tasks } from '../models/Task';
<<<<<<< HEAD
import { badRequest, notFound  } from '../errors';
=======
import {notFound} from '../errors/not-found';
>>>>>>> 484a5a2 (worked on error handlers)
 export const getAllTasks = async (req: express.Request, res: express.Response) => {
    //TODO: handle errors and edge cases
   try {
    //  console.log('sending all tasks')
         const task = await Tasks.find({}).sort('createdAt');
         res
             .status(StatusCodes.OK)
             .json({ success: true, task });
        
     } catch (e) {
     res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: e });
    }
}
<<<<<<< HEAD
export const getTask = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        console.log(req.params)
        const task = await Tasks.findOne({ _id: id });
        if (!task) {
            return res
              .status(StatusCodes.BAD_REQUEST)
              .json({ success: false, msg: `No task with ${id} exist` });
        }
        res.status(StatusCodes.OK).json({ success: true, task });
    } catch (e) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ success: false, msg: e });

=======
export const getTask = async (req:express.Request, res:express.Response) => {
    // try {
        const { id } = req.params
        console.log(req.params)
    const task = await Tasks.findOne({ _id: id });
    if (!task) {
        throw new notFound('error hyeah')
>>>>>>> 484a5a2 (worked on error handlers)
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
        res
          .status(StatusCodes.BAD_REQUEST)
          .json({ success: false, msg: e });

     }
}
export const updateTask = async (req:express.Request, res:express.Response) => {
    try {
        const { id } = req.params;
        if (!req.body.task) {
       return res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: 'Please provide task' });
            
        }
        const task = await Tasks.findByIdAndUpdate({ _id: id }, req.body, { new: true, runValidators: true })
        if (!task) {
          return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ success: false, msg: `No task with ${id} exist` });
        }
        res.status(StatusCodes.OK).json({ success: true, task })
    } catch (e) {
        // console.log('here as well')
       res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: e });

     }
}
export const deleteTask = async (req:express.Request, res:express.Response) => {
  try {
      //  res.setHeader("Access-Control-Allow-Origin", "*");
         const {id} = req.params
        const task= await Tasks.findByIdAndRemove({ _id: id });
         if (!task) {
           return res
             .status(StatusCodes.BAD_REQUEST)
             .json({ success: false, msg: `No task with ${id} exist` });
         }
        res.status(StatusCodes.OK).json({success:true,msg:"Task deleted"})
     } catch (e) {
   res.status(StatusCodes.BAD_REQUEST).json({ success: false, msg: `Error occurred` });

     }
}
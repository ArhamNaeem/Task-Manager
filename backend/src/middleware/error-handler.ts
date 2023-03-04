import { StatusCodes } from "http-status-codes";
import express from 'express'
interface type{
  statusCode: number;
   msg: string;
}

const errorHandlerMiddleware = (err, req:express.Request, res:express.Response, next:express.NextFunction) => {

  const errorObj : type = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || 'Something went wrong, please try again later'
 }
  
   return res.status(errorObj.statusCode).json({ msg:errorObj.msg });
};
export default errorHandlerMiddleware;



import { StatusCodes } from "http-status-codes";
import express from 'express'
//handler err type later
 const error_handler = (err, req:express.Request, res:express.Response, next:express.NextFunction) => {
    res.status(500).send('error')

}
export default error_handler;

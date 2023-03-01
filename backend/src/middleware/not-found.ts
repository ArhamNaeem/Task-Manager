import express from 'express' 
import { StatusCodes } from 'http-status-codes'
const not_found = (req:express.Request, res:express.Response) =>
    res.status(StatusCodes.NOT_FOUND).send('Page not found.')


export default not_found
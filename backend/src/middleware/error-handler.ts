import express from 'express'
//handler err type later
export const error_handler = (err, req:express.Request, res:express.Response, next:express.NextFunction) => {
    res.status(500).send('error')
}
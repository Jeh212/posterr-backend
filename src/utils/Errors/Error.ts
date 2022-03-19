// import { NextFunction, Request, Response } from "express"
// import { ApiError } from "./ApiError"

// function ErrorHandling(err: Error, request: Request, response: Response, next: NextFunction) {

//   if (error instanceof ApiError) {
//     response.status(err).json(err.message)
//     return;
//   }
//   response.status(500).json('something went wrong')
// }

// export { ErrorHandling }
import 'dotenv/config'
import express, { Request, Response, NextFunction } from "express";
import { routes } from './routes'
import { ApiError } from './utils/Errors';



const app = express();

app.use(express.json())

app.use(routes);

const port = process.env.SERVER_PORT

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {


  if (error instanceof ApiError) {

    response.status(error.statusCode).json({
      statusCode: 'error',
      message: error.message
    })
  }
  next()
})

app.listen(port, () =>
  console.log(`Server Is Running 🚀🚀🚀  http://localhost:${port}`)
);

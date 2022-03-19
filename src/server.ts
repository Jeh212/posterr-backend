import 'dotenv/config'
import express, { Request, Response, NextFunction } from "express";
import 'express-async-errors'
import { routes } from './routes'


const app = express();

// app.use((err: Error, request: Request, response: Response, next: NextFunction) => {

//   if (err.message) {
//     response.json({ error: err.message });
//   }

//   next(err);
// });

app.use(express.json())

app.use(routes);

const port = process.env.SERVER_PORT

app.listen(port, () =>
  console.log(`Server Is Running 🚀🚀🚀  http://localhost:${port}`)
);


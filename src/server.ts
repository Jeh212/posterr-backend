import 'dotenv/config'
import express from "express";

import { routes } from './routes'


const app = express();

app.use(express.json())
app.use(routes);

const port = process.env.SERVER_PORT

app.listen(port, () =>
  console.log(`Server Is Running 🚀🚀🚀  http://localhost:${port}`)
);

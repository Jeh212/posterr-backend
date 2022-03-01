import "dotenv/config";
import Express from "express";
const app = Express();

app.listen(process.env.SERVER_PORT, () =>
  console.log(`Server is Running http://localhost:${process.env.SERVER_PORT}`)
);

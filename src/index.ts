import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

import Tutor from "./controllers/Tutor";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express Server");
});
app.use("/api/tutor", Tutor);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

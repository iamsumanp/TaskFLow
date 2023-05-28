import express, { Application, Request, Response } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  console.log("Root Directory");
  res.send("Hello browiser");
});

app.listen(5000, () => console.log("Server Running"));

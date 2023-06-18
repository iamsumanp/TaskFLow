import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
const app: Application = express();
// const dotenv = require("dotenv").config();
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

app.use(express.json());

const PORT = 9000;
app.get('/', (req: Request, res: Response) => {
  console.log('Root Directory');
  res.send('Hello browiser');
});

app.listen(PORT, () => console.log('Server Running on ' + PORT));

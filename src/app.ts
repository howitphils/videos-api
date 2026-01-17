import express from "express";
import { Request, Response } from "express";
import { db } from "./db/db";
import {
  HttpStatus,
  UpdateVideoInputModel,
  VideoInputModel,
  VideoViewModel,
} from "./types";
import { videosRouter } from "./routers/videos-router";

export const app = express();

app.use(express.json());

app.use("/videos", videosRouter);

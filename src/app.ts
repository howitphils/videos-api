import express from "express";
import { Request, Response } from "express";
import { db } from "./db/db";
import { HttpStatus } from "./types";

export const app = express();

app.get("/videos", (req: Request, res: Response) => {
  res.json(db);
  return;
});

app.get("/videos/:id", (req: Request<{ id: string }>, res: Response): void => {
  const video = db.find((v) => v.id === parseInt(req.params.id));

  if (!video) {
    res.sendStatus(HttpStatus.NOT_FOUND);
  } else {
    res.status(HttpStatus.OK).json(video);
  }

  return;
});

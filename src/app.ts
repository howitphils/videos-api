import express from "express";
import { db } from "./db/db";

export const app = express();

app.get("/videos", (req, res) => {
  res.json(db);
});

app.get("/videos/:id", (req, res) => {
  const video = db.filter((v) => v.id === parseInt(req.params.id));
  res.json(video);
});

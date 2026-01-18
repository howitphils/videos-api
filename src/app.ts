import express from "express";
import { videosRouter } from "./routers/videos-router";
import { testingRouter } from "./routers/testing-router";

export const app = express();

app.use(express.json());
app.use("/videos", videosRouter);
app.use("/testing", testingRouter);

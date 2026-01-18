import express from "express";
import { videosRouter } from "./routers/videos-router";
import { testingRouter } from "./routers/testing-router";
import { configDotenv } from "dotenv";

export const app = express();

configDotenv();

app.use(express.json());
app.use("/videos", videosRouter);
app.use("/testing", testingRouter);

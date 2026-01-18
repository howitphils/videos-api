import { Router } from "express";
import { HttpStatus } from "../types";

export const testingRouter = Router();

testingRouter.delete("/all-data", (req, res) => {
  res.sendStatus(HttpStatus.NO_CONTENT);
});

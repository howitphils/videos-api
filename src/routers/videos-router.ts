import { Router } from "express";
import { videosController } from "../controllers/videos-controller";
import {
  validateCreateVideoInput,
  validateUpdateVideoInput,
} from "../validation/validators";

export const videosRouter = Router();

videosRouter.get("/", videosController.getVideos);
videosRouter.get("/:id", videosController.getVideoById);
videosRouter.post("/", validateCreateVideoInput, videosController.createVideo);
videosRouter.put(
  "/:id",
  validateUpdateVideoInput,
  videosController.updateVideo,
);
videosRouter.delete("/:id", videosController.deleteVideo);

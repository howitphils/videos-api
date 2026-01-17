import { Request, Response } from "express";
import { db } from "../db/db";
import {
  HttpStatus,
  UpdateVideoInputModel,
  VideoInputModel,
  VideoViewModel,
} from "../types";

export const videosController = {
  getVideos: (req: Request, res: Response) => {
    res.status(HttpStatus.OK).json(db);
    return;
  },

  getVideoById: (req: Request<{ id: string }>, res: Response) => {
    const video = db.find((v) => v.id === parseInt(req.params.id));

    if (!video) {
      res.sendStatus(HttpStatus.NOT_FOUND);
    } else {
      res.status(HttpStatus.OK).json(video);
    }

    return;
  },

  createVideo: (req: Request<{}, {}, VideoInputModel>, res: Response) => {
    const newVideo: VideoViewModel = {
      id: db.length + 1,
      title: req.body.title,
      author: req.body.author,
      availableResolutions: req.body.availableResolutions,
      canBeDownloaded: true,
      minAgeRestriction: null,
      createdAt: new Date().toISOString(),
      publicationDate: new Date().toISOString(),
    };

    db.push(newVideo);

    res.status(HttpStatus.CREATED).json(newVideo);

    return;
  },

  updateVideo: (
    req: Request<{ id: string }, {}, UpdateVideoInputModel>,
    res: Response,
  ) => {
    const video = db.find((v) => v.id === parseInt(req.params.id));

    if (!video) {
      res.sendStatus(HttpStatus.NOT_FOUND);
      return;
    }

    video.title = req.body.title;
    video.author = req.body.author;
    video.availableResolutions = req.body.availableResolutions;
    video.canBeDownloaded = req.body.canBeDownloaded;
    video.minAgeRestriction = req.body.minAgeRestriction;
    video.publicationDate = req.body.publicationDate;

    res.sendStatus(HttpStatus.NO_CONTENT);
    return;
  },

  deleteVideo: (req: Request<{ id: string }>, res: Response) => {
    const videoIndex = db.findIndex((v) => v.id === parseInt(req.params.id));

    if (videoIndex === -1) {
      res.sendStatus(HttpStatus.NOT_FOUND);
      return;
    }

    db.splice(videoIndex, 1);

    res.sendStatus(HttpStatus.NO_CONTENT);
    return;
  },
};

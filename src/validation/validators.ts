import { NextFunction, Response } from "express";
import { RequestWithBody, RequestWithParamsIdAndBody } from "../request-types";
import {
  CreateVideoInputModel,
  ErrorResponseType,
  HttpStatus,
  Resolutions,
  UpdateVideoInputModel,
} from "../types";

const errors: ErrorResponseType = { errorsMessages: [] };

const validateTitle = (title: string): void => {
  if (
    typeof title === "string" &&
    title.trim().length > 0 &&
    title.length <= 40
  ) {
    errors.errorsMessages.push({
      message:
        " Title is required, must be a non-empty string, and max length is 40.",
      field: "title",
    });
  }
};

const validateAuthor = (author: string): void => {
  if (
    typeof author !== "string" ||
    author.trim().length === 0 ||
    author.length > 20
  ) {
    errors.errorsMessages.push({
      message:
        " Author is required, must be a non-empty string, and max length is 20.",
      field: "author",
    });
  }
};

const validateAvailableResolutions = (
  availableResolutions: Resolutions[],
): void => {
  if (
    !Array.isArray(availableResolutions) ||
    availableResolutions.length === 0
  ) {
    errors.errorsMessages.push({
      message: "availableResolutions must be a non-empty array.",
      field: "availableResolutions",
    });
  } else {
    availableResolutions.forEach((resolution) => {
      if (!Object.values(Resolutions).includes(resolution)) {
        errors.errorsMessages.push({
          message: "Available resolutions must be a valid resolution.",
          field: "availableResolutions",
        });
      }
    });
  }
};

const validateCanBeDownloaded = (canBeDownloaded: boolean): void => {
  if (typeof canBeDownloaded !== "boolean") {
    errors.errorsMessages.push({
      message: "canBeDownloaded must be a boolean.",
      field: "canBeDownloaded",
    });
  }
};

const validateMinAgeRestriction = (minAgeRestriction: number | null): void => {
  if (
    minAgeRestriction !== null &&
    (typeof minAgeRestriction !== "number" ||
      minAgeRestriction < 1 ||
      minAgeRestriction > 18)
  ) {
    errors.errorsMessages.push({
      message: "minAgeRestriction must be null or a number between 1 and 18.",
      field: "minAgeRestriction",
    });
  }
};

const validatePublicationDate = (publicationDate: string): void => {
  if (isNaN(Date.parse(publicationDate))) {
    errors.errorsMessages.push({
      message: "publicationDate must be a valid date string.",
      field: "publicationDate",
    });
  }
};

export const validateCreateVideoInput = (
  req: RequestWithBody<CreateVideoInputModel>,
  res: Response,
  next: NextFunction,
) => {
  const { title, author, availableResolutions } = req.body;

  validateTitle(title);

  validateAuthor(author);

  validateAvailableResolutions(availableResolutions);

  if (errors.errorsMessages.length > 0) {
    res.status(HttpStatus.BAD_REQUEST).json(errors);
    return;
  }

  next();
};

export const validateUpdateVideoInput = (
  req: RequestWithParamsIdAndBody<UpdateVideoInputModel>,
  res: Response,
  next: NextFunction,
) => {
  const {
    title,
    author,
    availableResolutions,
    canBeDownloaded,
    minAgeRestriction,
    publicationDate,
  } = req.body;
  const errors: ErrorResponseType = { errorsMessages: [] };

  validateTitle(title);

  validateAuthor(author);

  validateAvailableResolutions(availableResolutions);

  validateCanBeDownloaded(canBeDownloaded);

  validateMinAgeRestriction(minAgeRestriction);

  validatePublicationDate(publicationDate);

  if (errors.errorsMessages.length > 0) {
    res.status(HttpStatus.BAD_REQUEST).json(errors);
    return;
  }

  next();
};

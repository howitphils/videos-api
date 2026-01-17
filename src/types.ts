export enum Resolutions {
  P144,
  P240,
  P360,
  P480,
  P720,
  P1080,
  P1440,
  P2160,
}

export type VideoInputModel = {
  title: string;
  author: string;
  availableResolutions: Resolutions[];
};

export type UpdateVideoInputModel = {
  title: string;
  author: string;
  availableResolutions: Resolutions[];
  canBeDownloaded: boolean;
  minAgeRestriction: number | null;
  publicationDate: string;
};

export type VideoViewModel = {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number | null;
  createdAt: string;
  publicationDate: string;
  availableResolutions: Resolutions;
};

export enum HttpStatus {
  OK = 200,
  CREATED = 201,
  NO_CONTENT = 204,
  BAD_REQUEST = 400,
  NOT_FOUND = 404,
}

export type ErrorMessageType = {
  message: string;
  field: string;
};

export type ErrorResponseType = {
  errorsMessages: ErrorMessageType[];
};

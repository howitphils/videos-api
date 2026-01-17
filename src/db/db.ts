import { Resolutions, VideoType } from "../types";

export const db: VideoType[] = [
  {
    id: 1,
    title: "Sample Video",
    author: "John Doe",
    canBeDownloaded: true,
    minAgeRestriction: null,
    createdAt: "2023-01-01T00:00:00.000Z",
    publicationDate: "2023-01-02T00:00:00.000Z",
    availableResolutions: Resolutions.P1080,
  },
  {
    id: 2,
    title: "Another Video",
    author: "Jane Smith",
    canBeDownloaded: false,
    minAgeRestriction: 18,
    createdAt: "2023-02-01T00:00:00.000Z",
    publicationDate: "2023-02-02T00:00:00.000Z",
    availableResolutions: Resolutions.P720,
  },
  {
    id: 3,
    title: "Third Video",
    author: "Alice Johnson",
    canBeDownloaded: true,
    minAgeRestriction: 13,
    createdAt: "2023-03-01T00:00:00.000Z",
    publicationDate: "2023-03-02T00:00:00.000Z",
    availableResolutions: Resolutions.P480,
  },
  {
    id: 4,
    title: "Fourth Video",
    author: "Bob Brown",
    canBeDownloaded: false,
    minAgeRestriction: null,
    createdAt: "2023-04-01T00:00:00.000Z",
    publicationDate: "2023-04-02T00:00:00.000Z",
    availableResolutions: Resolutions.P360,
  },
];

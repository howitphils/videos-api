import express from "express";
const app = express();
const port = 3003;

enum Resolutions {
  P144,
  P240,
  P360,
  P480,
  P720,
  P1080,
  P1440,
  P2160,
}

type VideoType = {
  id: number;
  title: string;
  author: string;
  canBeDownloaded: boolean;
  minAgeRestriction: number | null;
  createdAt: string;
  publicationDate: string;
  availableResolutions: Resolutions;
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/hi", (req, res) => {
  res.send("heheo, welcome back to back, my friend");
});

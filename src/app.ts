import express from "express";

export const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/videos", (req, res) => {
  res.json([{ id: 1, title: "Sample Video" }]);
});

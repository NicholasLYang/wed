import {Request, Response} from "express";

const express = require("express");
const { hexy } = require("hexy");
const fs = require("fs").promises;
const app = express();
const cors = require("cors");
const port = 2000;

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  fs.readFile("out.wasm").then((data: Buffer) => {
    res.json({  code: hexy(data, { numbering: "none", annotate: "none"}) })
  });
});

app.listen(port, () => console.log("listening on port " + port));
export {}
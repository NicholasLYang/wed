import {Request, Response} from "express";

const express = require("express");
const app = express();
const port = 2000;

app.get("/read", (req: Request, res: Response) => {
  req.params
});

app.post("/write", (req: Request, res: Response) => {

})



export {}
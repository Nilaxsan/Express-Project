import express from "express";
import Tutor from "../models/Tutor";

const Router = express.Router();

Router.get("/", (req, res) => {
  Tutor.find({})
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

export default Router;

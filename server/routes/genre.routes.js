const express = require("express");
const GenreRouter = express.Router();

const {
  GetAllGenres,
  CreateGenre,
} = require("../controllers/genre.controller");

GenreRouter.get("/", GetAllGenres);
GenreRouter.post("/create", CreateGenre);

module.exports = GenreRouter;

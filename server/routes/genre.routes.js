const express = require("express");
const GenreRouter = express.Router();

const {
//   GetAllGenre,
  CreateGenre,
} = require("../controllers/genre.controller");

// GenreRouter.get("/", GetAllGenre);
GenreRouter.post("/create", CreateGenre);

module.exports = GenreRouter;

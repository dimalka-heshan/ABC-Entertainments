const Genre = require("../models/genre.model");

const save = async (genreData) => {
  return await Genre.create(genreData);
};

const genreFindByGenre = async (genre) => {
  return await Genre.findOne({ genre: genre });
};

const findAllGenre = async () => {
  return await Genre.find();
};

module.exports = {
  save,
  findAllGenre,
  genreFindByGenre,
};

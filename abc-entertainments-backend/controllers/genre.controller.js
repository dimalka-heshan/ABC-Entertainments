const GenreService = require("../services/genres.services");
const Genres = require("../models/genre.model");

//Create genre controller functions
const CreateGenre = async (req, res) => {
  try {
    const newGenre = req.body;

    //Check genre whether it is already exist or not and send response
    const genre = await GenreService.genreFindByGenre(newGenre.genre);

    if (genre) {
      return res.status(500).send({
        success: false,
        message: "Genre already exists!",
      });
    } else if (!genre) {
      const Genre = new Genres(newGenre);

      //save genre
      const result = await GenreService.save(Genre);

      //Check result and send response
      if (result) {
        return res.status(201).send({
          success: true,
          message: "Genre created!",
        });
      } else {
        return res.status(500).send({
          success: false,
          message: "Genre creating failed!",
        });
      }
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

//Get all Genres controller functions
const GetAllGenres = async (req, res) => {
  try {
    const result = await GenreService.findAllGenre();

    //Check result and send response
    if (result) {
      return res.status(201).send({
        success: true,
        genres: result,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "Genres not found!",
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  CreateGenre,
  GetAllGenres,
};

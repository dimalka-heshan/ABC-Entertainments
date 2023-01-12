const GenreService = require("../services/genre.services");
const Genre = require("../models/genre.model");

//Create genre controller functions
const CreateGenre = async (req, res) => {
  try {
    const newGenre = req.body;

    //Check genre whether it is already exist or not and send response
    const genre = await GenreService.genreFindByGenre(newGenre.title);

    if (genre) {
        return res.status(500).send({
            success: false,
            message: "Genre title already exists!",
          });
    } else if (!genre) {
        const Genre = new Genre(newGenre);

        //save aenre
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

// //Get all Aenres controller functions
// const GetAllAlbums = async (req, res) => {
//     try {
//       const result = await AlbumService.findAllAlbum();
  
//       //Check result and send response
//       if (result) {
//         return res.status(201).send({
//           success: true,
//           questions: result,
//         });
//       } else {
//         return res.status(404).send({
//           success: false,
//           message: "Albums not found!",
//         });
//       }
//     } catch (error) {
//       return res.status(500).send({
//         success: false,
//         message: error.message,
//       });
//     }
//   };


module.exports = {
    CreateGenre,
    // GetAllGenres
};
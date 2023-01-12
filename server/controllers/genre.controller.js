// const GenreService = require("../services/genre.services");
// const Genre = require("../models/genre.model");

// //Create Album controller functions
// const CreateAlbum = async (req, res) => {
//   try {
//     const newAlbum = req.body;

//     //Check albem title whether it is already exist or not and send response
//     const album = await AlbumService.albumFindByTitle(newAlbum.title);

//     if (album) {
//         return res.status(500).send({
//             success: false,
//             message: "Album title already exists!",
//           });
//     } else if (!album) {
//         const Album = new Albums(newAlbum);

//         //save album
//         const result = await AlbumService.save(Album);
    
//         //Check result and send response
//         if (result) {
//           return res.status(201).send({
//             success: true,
//             message: "Album created!",
//           });
//         } else {
//           return res.status(500).send({
//             success: false,
//             message: "Album creating failed!",
//           });
//         }
//     }

//   } catch (error) {
//     return res.status(500).send({
//       success: false,
//       message: error.message,
//     });
//   }
// };

// //Get all Albums controller functions
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


// module.exports = {
//     CreateGenre,
//     GetAllGenres
// };
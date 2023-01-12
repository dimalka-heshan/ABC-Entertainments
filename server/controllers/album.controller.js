const AlbumService = require("../services/albums.services");
const Albums = require("../models/album.model");

//Create Album controller functions
const CreateAlbum = async (req, res) => {
  try {
    const newAlbum = req.body;

    const Album = new Albums(newAlbum);

    //save album
    const result = await AlbumService.save(Album);

    //Check result and send response
    if (result) {
      return res.status(201).send({
        success: true,
        message: "Album created!",
      });
    } else {
      return res.status(400).send({
        success: true,
        message: "Album creating failed!",
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
    CreateAlbum
};
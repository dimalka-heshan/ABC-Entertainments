const AlbumService = require("../services/albums.services");
const Albums = require("../models/album.model");

//Create Album controller functions
const CreateAlbum = async (req, res) => {
  try {
    const newAlbum = req.body;

    //Check albem title whether it is already exist or not and send response
    const album = await AlbumService.albumFindByTitle(newAlbum.title);

    if (album) {
        return res.status(500).send({
            success: false,
            message: "Album title already exists!",
          });
    } else if (!album) {
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
          return res.status(500).send({
            success: false,
            message: "Album creating failed!",
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

//Get all Albums controller functions
const GetAllAlbums = async (req, res) => {
    try {
      const result = await AlbumService.findAllAlbum();
  
      //Check result and send response
      if (result) {
        return res.status(201).send({
          success: true,
          questions: result,
        });
      } else {
        return res.status(404).send({
          success: false,
          message: "Albums not found!",
        });
      }
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

//Get specific Album by ID controller functions
const GetSpecificAlbum = async (req, res) => {
    try {
      //Get Album id from path variable
      const id = req.params.id;
      const result = await AlbumService.albumFindByID(id);
  
      //Check result and send response
      if (result) {
        return res.status(201).send({
          success: true,
          question: result,
        });
      } else {
        return res.status(404).send({
          success: true,
          message: "Album not found!",
        });
      }
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

  
//Delete Album by id function
const DeleteAlbum = async (req, res) => {
    try {
      //get Album id from path variable
      const id = req.params.id;
  
      //validate Album id
      const checkAlbum = await AlbumService.albumFindByID(id);
  
      if (!checkAlbum) {
        return res.status(404).send({
          success: false,
          message: "Album not found!",
        });
      } else {
        await AlbumService.deleteAlbumById(id);
        return res.status(200).send({
          success: true,
          message: "Album Deleted!",
        });
      }
    } catch (error) {
      return res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };

//Update album
const UpdateAlbum = async (req, res) => {
    try {
        const id = req.params.id;
        const updateData = req.body;

          //Check albem title whether it is already exist or not and send response
        const album = await AlbumService.albumFindByTitle(updateData.title);

        if (album) {
            return res.status(500).send({
                success: false,
                message: "Album title already exists!",
            });
        } else if (!album) {
            const UpdatedAlbum = await AlbumService.updateAlbum(id, updateData);
            return res.status(200).send({ 
                success: true, 
                UpdatedAlbum: UpdatedAlbum 
            });
        }

    } catch (e) {
      return res.status(500).send({ success: false, message: e.message });
    }
  };

module.exports = {
    CreateAlbum,
    GetAllAlbums,
    GetSpecificAlbum,
    DeleteAlbum,
    UpdateAlbum
};
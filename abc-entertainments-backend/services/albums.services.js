const Album = require("../models/album.model");

const save = async (albumData) => {
  return await Album.create(albumData);
};

const albumFindByID = async (id) => {
  return await Album.findById(id);
};

const albumFindByTitle = async (title) => {
  return await Album.findOne({ title: title });
};

const findAllAlbum = async () => {
  return await Album.find().sort({
    createdAt: -1,
  });
};

const updateAlbum = async (id, updatedalbum) => {
  return await Album.findByIdAndUpdate(id, updatedalbum);
};

const deleteAlbumById = async (id) => {
  return await Album.findByIdAndDelete(id);
};

module.exports = {
  save,
  albumFindByID,
  findAllAlbum,
  updateAlbum,
  deleteAlbumById,
  albumFindByTitle,
};

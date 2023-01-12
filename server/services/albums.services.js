const Albem = require("../models/album.model");

const save = async (albemData) => {
  return await Albem.create(albemData);
};

const albemFindByID = async (id) => {
  return await Albem.findById(id);
};

const findAllAlbem = async () => {
  return await Albem.find().sort({
    createdAt: -1,
  });
};

const updateAlbem = async (id, updatedalbem) => {
  return await Albem.findByIdAndUpdate(id, updatedalbem);
};

const deleteAlbemById = async (id) => {
  return await Albem.findByIdAndDelete(id);
};

module.exports = {
  save,
  albemFindByID,
  findAllAlbem,
  updateAlbem,
  deleteAlbemById,
};
const express = require("express");
const AlbumRouter = express.Router();

const {
  CreateAlbum,
  GetAllAlbums,
  GetSpecificAlbum,
  DeleteAlbum,
  UpdateAlbum,
} = require("../controllers/album.controller");

AlbumRouter.post("/create", CreateAlbum);
AlbumRouter.get("/", GetAllAlbums);
AlbumRouter.get("/:id", GetSpecificAlbum);
AlbumRouter.delete("/:id", DeleteAlbum);
AlbumRouter.patch("/:id", UpdateAlbum);

module.exports = AlbumRouter;

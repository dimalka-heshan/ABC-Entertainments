const mongoose = require("mongoose");

const GenreSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: true,
  },
},
{
  timestamps: true,
}
);

const Genre = mongoose.model("genres", GenreSchema);
module.exports = Genre;

const mongoose = require("mongoose");

const ChefSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  password: String,
});

module.exports = mongoose.model("Chef", ChefSchema);

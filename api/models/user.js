const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
  profilePicture: { type: String, default: "" },
  joindDate: { type: Date, default: Date.now },
  DOB: { type: Dat, require: true },
  mobileNo: { type: Number, require: true },
  username: { type: String, require: true },
  city: { type: String, require: true },
  state: { type: String, require: true },
  admin: { type: Boolean, require: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

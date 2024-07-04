const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const port = 3000;
const cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const jwt = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://vivek:xJei3fTripkEhWEh@alldata.currj2j.mongodb.net/test",
    {}
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error Connecting to MongoDB");
  });

app.listen(port, () => {
  console.log("server is running on port 3000");
});

const User = require("./models/user");
const Post = require("./models/post");

app.post("/register", async (req, res) => {
  console.log("here");
  try {
    const { name, email, password, admin, state, city, username, DOB, mobileNo } = req.body;

    // const existingUser = await User.findOne({ email });
    // if (existingUser) {
    //   return res.status(400).json({ message: "Email already registered" });
    // }

    //create a new user
    const newUser = new User({
      name,
      email,
      password,
      admin,
      state,
      city,
      username,
      mobileNo,
      DOB
    });

    //save the  user to the database
    await newUser.save();

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "error registering user" });
  }
});

app.post("/login", async (req, res) => {
  console.log("first");
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      console.log(user);
      return res.status(404).json({ message: "Invalid username" });
    }

    if (user.password !== password) {
      return res.status(404).json({ message: "Invalid password" });
    }

    // const token = jwt.sign({ userId: user._id }, secretKey);

    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Login failed" });
  }
});

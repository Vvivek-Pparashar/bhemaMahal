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
    "mongodb+srv://vivek:xJei3fTripkEhWEh@alldata.currj2j.mongodb.net/org"
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
// const Post = require("./models/post");
const Vehicle = require("./models/vehicle");

app.post("/register", async (req, res) => {
  console.log("here");
  try {
    const {
      name,
      email,
      password,
      admin,
      state,
      city,
      username,
      DOB,
      mobileNo,
    } = req.body;

    const newUser = new User({
      name,
      email,
      password,
      admin,
      state,
      city,
      username,
      mobileNo,
      DOB,
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
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).send({ err: "Invalid UserName" });
    }

    if (user.password !== password) {
      return res.status(404).send({ message: "Invalid password" });
    }

    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Check Internet Connection" });
  }
});

app.get("/get-Dealers", async (req, res) => {
  // console.log("hellooooo")
  try {
    const users = await User.find().sort({ createdAt: -1 });

    res.status(200).json(users);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while getting the posts" });
  }
});

app.post("/add-vehicle", async (req, res) => {
  console.log("here");
  try {
    const {
      type,
      company,
      modal,
      variant,
      MYear,
      hasPVNo,
      PVNo1,
      PVNo2,
      PVNo3,
      PVNo4,
      engineNo,
      chassisNo,
      ic,
      ied,
      serviceDate,
      kmDriven,
      ownerName,
      mobileNo,
      DOB,
      aadharNo,
      hasPAN,
      PAN,
      state,
      city,
      pincode,
      createdBy,
    } = req.body;

    const PVNo = hasPVNo ? `${PVNo1}-${PVNo2}${PVNo3}-${PVNo4}` : "";

    console.log(req.body);

    const newVehicle = new Vehicle({
      type,
      company,
      modal,
      variant,
      MYear,
      hasPVNo,
      PVNo,
      engineNo,
      chassisNo,
      ic,
      ied,
      serviceDate,
      kmDriven,
      ownerName,
      mobileNo,
      DOB,
      aadharNo,
      hasPAN,
      PAN,
      state,
      city,
      pincode,
      createdBy,
    });

    //save the  user to the database
    let id = "";
    await newVehicle.save().then(vehicle => id = vehicle._id);

    await User.findByIdAndUpdate(createdBy, {
      $push: { registeredVehicle: id },
    });

    console.log("id", id);

    res.status(200).json({ message: "Registration successful" });
  } catch (error) {
    console.log("error registering user", error);
    res.status(500).json({ message: "error registering user" });
  }
});

app.get("/all-vehicles", async (req, res) => {
  try {
    const allVehicleDatabase = await Vehicle.find()
      .populate("createdBy", "name")
      .sort({ createdAt: -1 });

    res.status(200).json(allVehicleDatabase);
  } catch (error) {
    res
      .status(500)
      .json({ message: "An error occurred while getting the posts" });
  }
});

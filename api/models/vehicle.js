const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: true,
  },

  modal: {
    type: String,
    required: true,
  },

  variant: {
    type: String,
    required: true,
  },

  MYear: {
    type: Number,
    required: true,
  },

  hasPVNo: {
    type: Boolean,
    required: true,
  },

  PVNo: {
    type: String,
    default: "",
  },
  engineNo: {
    type: String,
    required: true,
  },
  chassisNo: {
    type: String,
    required: true,
  },
  ic: {
    type: String,
    required: true,
  },
  ied: {
    type: Date,
    required: true,
  },
  serviceDate: {
    type: Date,
    required: true,
  },
  kmDriven: {
    type: Number,
    required: true,
  },
  ownerName: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: Number,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  aadharNo: {
    type: Number,
    required: true,
  },
  hasPAN: {
    type: Boolean,
    required: true,
  },
  PAN: {
    type: String,
    // required: true,
    default: "",
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },

  pincode: {
    type: String,
    required: true,
  },

  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;

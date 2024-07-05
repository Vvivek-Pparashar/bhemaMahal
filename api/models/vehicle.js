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
    type: String,
    required: true,
  },

  hasPVNo: {
    type: Boolean,
    required: true,
  },

  PVNo: {
    type: String,
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
    type: String,
    required: true,
  },
  serviceDate: {
    type: String,
    required: true,
  },
  kmDriven: {
    type: String,
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
    type: String,
    required: true,
  },
  PAN: {
    type: String,
    required: true,
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
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Vehicle = mongoose.model("Vehicle", vehicleSchema);

module.exports = Vehicle;

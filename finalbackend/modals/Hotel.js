const mongoose = require("mongoose");

const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide hotel name"],
    maxlength: [50, "Name can't be more than 50 character"]
  },
  photo: {
    type: String,
    default: "no-photo.jpg"
  },
  description: {
    type: String,
    required: [true, "Please add a description"],
    maxlength: [4000, "Description can't be more than 500 character"]
  },
  phone: {
    type: String,
    maxlength: [20, "Phone number can not be longer than  20 character"]
  },
  email: {
    type: String,
    match: [
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide valid email"
    ]
  },
  address: {
    type: String,
    required: [true, "Please add an adress"]
  },
  room:{
    type: String,
    required: [true, "Please provide room"],
  },
  location: {
    type: {
      type: String,
      enum: ["Point"]
    },
    coordinates: {
      type: [Number],
      index: "2dsphere"
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String
  },
  averageRating: {
    type: Number,
    min: [1, "Rating must be at least 1"],
    max: [10, "Rating can't be more than 10 "]
  },
  averageCost: Number,
  features: {
    type: String,
    required: [false, "Please provide a features of your hotel"]
  }
});

module.exports = mongoose.model("Hotel", HotelSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is Required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: [true],
    },
    website: {
      type: String,
    },
    gender: {
      type: String,
    },
    dateOfBirth: {
      type: String,
      required: true,
    },
    nationality: {
      type: String,
      required: true,
    },
    nationalIdNumber: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    provinceState: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    postalZipCode: {
      type: Number,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;

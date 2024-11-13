import User from "../model/User.js";
export const createProfile = async (req, res) => {
  try {
    const {
      address,
      city,
      country,
      dateOfBirth,
      email,
      gender,
      nationalIdNumber,
      nationality,
      phoneNumber,
      postalZipCode,
      provinceState,
      website,
    } = req.body;

    const userExists = await User.findOne({ email: email });
    if (userExists) {
      return res.status(400).json({ message: "User already Exists." });
    }

    const newUser = new User({
      address,
      city,
      country,
      dateOfBirth,
      email,
      gender,
      nationalIdNumber,
      nationality,
      phoneNumber,
      postalZipCode,
      provinceState,
      website,
    });

    await newUser.save();

    res.json({ message: "User added successfully!", user: newUser });
  } catch (error) {
    res.status(500).json(error);
  }
};

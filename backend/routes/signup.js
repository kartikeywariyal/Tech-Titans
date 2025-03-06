const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Chef = require("../models/Chef");

// User Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    const newUser = new User({ firstName, lastName, email, password });
    await newUser.save();
    res.status(201).json({ message: "User signup successful!" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed!", error });
  }
});

// Chef Signup Route
router.post("/signup-chef", async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const existingChef = await Chef.findOne({ email });

    if (existingChef) {
      return res.status(400).json({ message: "Chef already exists!" });
    }

    const newChef = new Chef({ firstName, lastName, email, password });
    await newChef.save();
    res.status(201).json({ message: "Chef signup successful!" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed!", error });
  }
});

module.exports = router;

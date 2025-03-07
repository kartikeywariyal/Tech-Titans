const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Chef = require("../models/Chef");

// User Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Account does not exist!" });
    }

    if (user.password !== password) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    res.status(200).json({ message: "User login successful!" });
  } catch (error) {
    res.status(500).json({ message: "Login failed!", error });
  }
});

// Chef Login Route
router.post("/login-chef", async (req, res) => {
  try {
    const { email, password } = req.body;
    const chef = await Chef.findOne({ email });

    if (!chef) {
      return res.status(400).json({ message: "Account does not exist!" });
    }

    if (chef.password !== password) {
      return res.status(400).json({ message: "Invalid password!" });
    }

    res.status(200).json({ message: "Chef login successful!" });
  } catch (error) {
    res.status(500).json({ message: "Login failed!", error });
  }
});

module.exports = router;

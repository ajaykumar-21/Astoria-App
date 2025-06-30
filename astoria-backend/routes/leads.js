const express = require("express");
const router = express.Router();
const Lead = require("../models/Lead");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newLead = new Lead({ name, email, phone });
    await newLead.save();

    res.status(201).json({ message: "Lead saved to DB" });
  } catch (error) {
    console.error("Error saving lead:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;

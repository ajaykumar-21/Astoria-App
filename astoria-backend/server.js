const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const leadRoutes = require("./routes/leads");

const app = express();
const PORT = process.env.PORT || 5000;

const allowedOrigin = "https://astoria-landing-mu.vercel.app";

// Middleware
app.use(
  cors({
    origin: allowedOrigin,
    methods: ["GET", "POST"],
  })
);
app.use(express.json());

// Routes
app.use("/api/leads", leadRoutes);

// DB connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB Error:", err));

// Server start
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

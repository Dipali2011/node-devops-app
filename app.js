const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP" });
});

// Sample API
app.get("/", (req, res) => {
  res.send("Hello from DevOps Project 🚀.");
});

// Metrics endpoint (basic)
app.get("/metrics", (req, res) => {
  res.json({
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now()
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

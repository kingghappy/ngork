const express = require("express");
const axios = require("axios");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Proxy API route
app.get("/api/proxy", async (req, res) => {
  try {
    const response = await axios.get(`${process.env.NGROK_URL}/api/hello`);
    res.json(response.data);
  } catch (error) {
    console.error("Error proxying to local:", error.message);
    res.status(500).json({ error: "Failed to fetch from local server" });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});

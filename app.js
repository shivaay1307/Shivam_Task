const express = require("express");
const { check, validationResult } = require("express-validator");
const { connectToDatabase, closeDatabaseConnection, getUserById, findRelevantAds } = require("./mongoDBConnection");
const { getTargetedAdvertisement, getAdSlots } = require("./advertisements");

const app = express();
const port = 3000;

app.use(express.json());

app.get(
  "/api/targeted-advertisement/:userId",
  [check("userId").isInt().toInt()],
  getTargetedAdvertisement
);

app.get(
  "/api/ad-slots/:userId",
  [check("userId").isInt().toInt()],
  getAdSlots
);

app.listen(port, async () => {
  await connectToDatabase();
  console.log(`Server is listening on port ${port}`);
});

process.on("SIGINT", async () => {
  try {
    await closeDatabaseConnection();
    console.log("MongoDB connection closed");
  } catch (error) {
    console.error("Error closing MongoDB connection:", error);
  } finally {
    process.exit(0);
  }
});

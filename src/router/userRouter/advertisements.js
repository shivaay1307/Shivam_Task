const { validationResult } = require("express-validator");
const { getUserById, findRelevantAds } = require("../../mongodb/mongoDBConnection");

const numberOfAdSlots = 3;

async function getTargetedAdvertisement(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userId = req.params.userId;
    const user = await getUserById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ error: `User with ID ${userId} not found` });
    }

    const relevantAds = await findRelevantAds(user);

    console.log("relevantAds",user);

    res.json(relevantAds);
  } catch (error) {
    console.error("Error in /api/targeted-advertisement:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function getAdSlots(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const userId = req.params.userId;
    const user = await getUserById(userId);

    if (!user) {
      return res
        .status(404)
        .json({ error: `User with ID ${userId} not found` });
    }

    const relevantAds = await findRelevantAds(user);
    const adsForWebpage = [];

    for (let i = 0; i < numberOfAdSlots; i++) {
      if (relevantAds.length === 0) {
        break;
      }

      const randomIndex = Math.floor(Math.random() * relevantAds.length);
      const randomAd = relevantAds.splice(randomIndex, 1)[0];
      adsForWebpage.push(randomAd);
    }

    console.log("adsForWebpage",user);
  } catch (error) {
    console.error("Error in /api/ad-slots:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { getTargetedAdvertisement, getAdSlots };
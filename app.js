const express = require('express');
const { check, validationResult } = require('express-validator');
const app = express();
const port = 3000;
const data = require('./dummyData');

const numberOfAdSlots = 3;

function findRelevantAds(user) {
  const relevantAds = [];

  data.advertisers.forEach((advertiser) => {
    advertiser.ads.forEach((ad) => {
      const criteria = ad.target_criteria;

      if (
        (!criteria.interests || criteria.interests.some((interest) => user.interests.includes(interest))) &&
        (!criteria.gender || criteria.gender === user.gender)
      ) {
        relevantAds.push(ad);
      }
    });
  });

  return relevantAds;
}

app.get('/api/targeted-advertisement/:userId', [
  check('userId').isInt().toInt(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userId = req.params.userId;
  const user = data.users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const relevantAds = findRelevantAds(user);

  res.json(relevantAds);
});

app.get('/api/ad-slots/:userId', [
  check('userId').isInt().toInt(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const userId = req.params.userId;
  const user = data.users.find((u) => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const relevantAds = findRelevantAds(user);
  const adsForWebpage = [];

  for (let i = 0; i < numberOfAdSlots; i++) {
    if (relevantAds.length === 0) {
      break;
    }

    const randomIndex = Math.floor(Math.random() * relevantAds.length);
    const randomAd = relevantAds.splice(randomIndex, 1)[0];
    adsForWebpage.push(randomAd);
  }

  res.json(adsForWebpage);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

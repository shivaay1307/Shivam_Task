const { MongoClient } = require("mongodb");

const uri =
  "mongodb+srv://ShivamTask:ShivamTask@shivamtask.xbuw1s7.mongodb.net/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

async function closeDatabaseConnection() {
  await client.close();
  console.log("MongoDB connection closed");
}

async function getUserById(userId) {
  try {
    const database = client.db("users");
    const usersCollection = database.collection("userCollection");

    const user = await usersCollection.findOne({
      $or: [{ _id: userId }, { _id: parseInt(userId) }],
    });

    if (!user) {
      console.log("User not found:", userId);
      return null;
    }

    return user;
  } catch (error) {
    console.error("Error finding user:", error);
    throw error;
  }
}
async function findRelevantAds(user) {
  const relevantAds = [];

  try {
    const db = client.db("ShivamCluster");
    const advertisersCollection = db.collection("advertisers");
    const cursor = advertisersCollection.find({});
    const advertisers = await cursor.toArray();

    advertisers.forEach((advertiser) => {
      advertiser.ads.forEach((ad) => {
        const criteria = ad.target_criteria;

        if (
          (!criteria.interests ||
            criteria.interests.some((interest) =>
              user.interests.includes(interest)
            )) &&
          (!criteria.gender || criteria.gender === user.gender)
        ) {
          relevantAds.push(ad);
        }
      });
    });
  } catch (error) {
    console.error("Error finding relevant ads:", error);
  }

  return relevantAds;
}

module.exports = {
  connectToDatabase,
  closeDatabaseConnection,
  getUserById,
  findRelevantAds,
  client,
};

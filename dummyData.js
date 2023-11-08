const data = {
  users: [
    {
      id: 1,
      name: "John Doe",
      location: "New York",
      interests: ["Technology", "Sports", "Travel"],
      gender: "Male",
      email: "john@example.com",
    },
    {
      id: 2,
      name: "Alice Smith",
      location: "Los Angeles",
      interests: ["Art", "Music", "Cooking"],
      gender: "Female",
      email: "alice@example.com",
    },
    {
      id: 3,
      name: "Emily Johnson",
      location: "San Francisco",
      interests: ["Technology", "Gaming", "Travel", "Movies"],
      gender: "Female",
      email: "emily@example.com",
    },
    {
      id: 4,
      name: "Michael Brown",
      location: "Chicago",
      interests: ["Sports", "Outdoor Activities", "Movies"],
      gender: "Male",
      email: "michael@example.com",
    },
    {
      id: 5,
      name: "Sophia Wilson",
      location: "Los Angeles",
      interests: ["Art", "Music", "Cooking"],
      gender: "Female",
      email: "sophia@example.com",
    },
    {
      id: 6,
      name: "James Smith",
      location: "Miami",
      interests: ["Technology", "Sports", "Fashion", "Travel"],
      gender: "Male",
      email: "james@example.com",
    },
    {
      id: 7,
      name: "Olivia Davis",
      location: "New York",
      interests: [],
      gender: "Female",
      email: "olivia@example.com",
    },
    {
      id: 8,
      name: "David Lee",
      location: "Seattle",
      interests: ["Technology", "Gaming"],
      gender: "Male",
      email: "david@example.com",
    },
    {
      id: 9,
      name: "Emma Miller",
      location: "San Francisco",
      interests: ["Art", "Travel"],
      gender: "Female",
      email: "emma@example.com",
    },
  ],
  advertisers: [
    {
      id: 1,
      name: "Tech Inc.",
      ads: [
        {
          ad_id: 101,
          title: "Tech Gadgets Sale",
          content: "Get the latest tech gadgets at discounted prices!",
          target_criteria: {
            interests: ["Technology", "Art"], // Add "Art" to match user 2's interests
            gender: "Female", // Change to "Female" to match user 2's gender
          },
        },
        {
          ad_id: 102,
          title: "Tech Accessories",
          content: "Upgrade your tech setup with our accessories!",
          target_criteria: {
            interests: ["Technology"],
            gender: "Both",
          },
        },
        {
          ad_id: 103,
          title: "Smartphone Deals",
          content: "Discover great deals on the latest smartphones!",
          target_criteria: {
            interests: ["Technology"],
            gender: "Both",
          },
        },
      ],
    },    
    {
      id: 2,
      name: "Fashion World",
      ads: [
        {
          ad_id: 201,
          title: "Fashion Sale",
          content: "Shop the latest fashion trends now!",
          target_criteria: {
            interests: ["Fashion"],
            gender: "Female",
          },
        },
        {
          ad_id: 202,
          title: "Men's Fashion",
          content: "Discover the latest trends in men's fashion!",
          target_criteria: {
            interests: ["Fashion", "Movies" ],
            gender: "Male",
          },
        },
        {
          ad_id: 203,
          title: "Accessories Collection",
          content: "Complete your look with our stylish accessories!",
          target_criteria: {
            interests: ["Cooking", "Art", "Travel"],
            gender: "Female",
          },
        },
      ],
    },
    // Existing advertisers with additional ads
  ],
};

module.exports = data;

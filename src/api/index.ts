export const MOCK_DATA = [
  {
    id: "Bedrock Restaurants",
    restaurants: [
      {
        id: "0",
        name: "Yabba Dabba Diner",
        menus: [
          {
            id: "lunch",
            name: "Lunch Menu",
            menuItems: [
              {
                id: "dino-burger",
                name: "Dino Burger",
                description: "1/4 pound buffalo burger on sour dough bun",
                price: 10.99,
              },
            ],
          },
        ],
        location: {
          address1: "Bedrock St",
          city: "Bedrock",
          state: "Utah",
          zip: 84532,
        },
        contact: {
          phone: 8888888888,
          email: "fred@yabbadabbadiner.com",
          post: {
            address1: "Bedrock St",
            city: "Bedrock",
            state: "Utah",
            zip: 84532,
          },
        },
      },
    ],
  },
];

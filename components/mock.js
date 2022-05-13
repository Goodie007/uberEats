const jsonData = [
    {
        "id": "1855ba9f-2366-4a1a-a494-94f03bc2377d",
        "image": "https://image.shutterstock.com/shutterstock/photos/1555289603/display_1500/stock-photo-egusi-soup-and-goat-meat-with-pounded-yam-or-fufu-on-a-white-embossed-background-1555289603.jpg",
        "name": "food1"
    },
    {
        "id": "1855ba9f-2366-4a1a-a494-94f03bc2389d",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food2",
    },
    {
        "id": "1855ba9f-2366-4a1a-a414-94f03bc2377e",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food3"
    },
    {
        "id": "1855ba9f-2366-4a1a-a414-94f03bc2356e",
        "image": "https://image.shutterstock.com/image-photo/white-plate-homemade-beans-pancakes-600w-1728967345.jpg",
        "name": "food4"
    }
]

const jsonData2 = [
    {
        "id": "1855b9f-2366-4a1a-a494-94f03bc2377d",
        "image": "https://image.shutterstock.com/shutterstock/photos/1555289603/display_1500/stock-photo-egusi-soup-and-goat-meat-with-pounded-yam-or-fufu-on-a-white-embossed-background-1555289603.jpg",
        "name": "food1"
    },
    {
        "id": "1855baf9f-2366-4a1a-a494-94f03bc2389d",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food2",
    },
    {
        "id": "1855ba9-2366-4a1aa414-94f03bc2377e",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food3"
    },
    {
        "id": "1855ba9f-236-4a1a-a414-94f03bc2356e",
        "image": "https://image.shutterstock.com/image-photo/white-plate-homemade-beans-pancakes-600w-1728967345.jpg",
        "name": "food4"
    },
    {
        "id": "1855ba9f-2366-4a1a-a494-94f03bc2377d",
        "image": "https://image.shutterstock.com/shutterstock/photos/1555289603/display_1500/stock-photo-egusi-soup-and-goat-meat-with-pounded-yam-or-fufu-on-a-white-embossed-background-1555289603.jpg",
        "name": "food1"
    },
    {
        "id": "1855ba9f-2366-4a1a-a49-94f03bc2389d",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food2",
    },
    {
        "id": "1855ba9f-2366-4a1a-a414-94f03bc2377",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food3"
    },
    {
        "id": "1855ba9f-2366-4a1a-a414-94f03bc256e",
        "image": "https://image.shutterstock.com/image-photo/white-plate-homemade-beans-pancakes-600w-1728967345.jpg",
        "name": "food4"
    },
    {
        "id": "1855ba9f-2366-4a1a-a494-94f03b2377d",
        "image": "https://image.shutterstock.com/shutterstock/photos/1555289603/display_1500/stock-photo-egusi-soup-and-goat-meat-with-pounded-yam-or-fufu-on-a-white-embossed-background-1555289603.jpg",
        "name": "food1"
    },
    {
        "id": "1855ba9f-2366-4a1a-a494-94f03bc389d",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food2",
    },
    {
        "id": "1855ba9f-2366-4a1a-a414-94f3bc2377e",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food3"
    },
    {
        "id": "1855ba9f-2366-4a1a-a414-94f03bc2356e",
        "image": "https://image.shutterstock.com/image-photo/white-plate-homemade-beans-pancakes-600w-1728967345.jpg",
        "name": "food4"
    },
    {
        "id": "1855ba9f-2366-4aa-a494-94f03bc2377d",
        "image": "https://image.shutterstock.com/shutterstock/photos/1555289603/display_1500/stock-photo-egusi-soup-and-goat-meat-with-pounded-yam-or-fufu-on-a-white-embossed-background-1555289603.jpg",
        "name": "food1"
    },
    {
        "id": "1855ba9f-2366-4a1a-a49494f03bc2389d",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food2",
    },
    {
        "id": "1855ba9f-2366-4a1a-a414-94f03b2377e",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food3"
    },
    {
        "id": "1855ba9f-2366-4a1a-a414-94f03c2356e",
        "image": "https://image.shutterstock.com/image-photo/white-plate-homemade-beans-pancakes-600w-1728967345.jpg",
        "name": "food4"
    },
    {
        "id": "1855ba9f-2366-4a1a-a494-94f03bc277d",
        "image": "https://image.shutterstock.com/shutterstock/photos/1555289603/display_1500/stock-photo-egusi-soup-and-goat-meat-with-pounded-yam-or-fufu-on-a-white-embossed-background-1555289603.jpg",
        "name": "food1"
    },
    {
        "id": "1855ba9f-2366-4a1a-a494-94f03bc2389d",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food2",
    },
    {
        "id": "1855ba9f-2366-41a-a414-94f03bc2377e",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food3"
    },
    {
        "id": "1855ba9f-2366-1a-a414-94f03bc2356e",
        "image": "https://image.shutterstock.com/image-photo/white-plate-homemade-beans-pancakes-600w-1728967345.jpg",
        "name": "food4"
    },
    {
        "id": "1855ba9f-2366-4a1a-a494-94f03bc23d",
        "image": "https://image.shutterstock.com/shutterstock/photos/1555289603/display_1500/stock-photo-egusi-soup-and-goat-meat-with-pounded-yam-or-fufu-on-a-white-embossed-background-1555289603.jpg",
        "name": "food1"
    },
    {
        "id": "1855ba9f-2366-4a1a-a494-94f03bc238d",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food2",
    },
    {
        "id": "1855ba9f-2366-4a1a-a414-94f03c2377e",
        "image": "https://image.shutterstock.com/image-photo/african-national-food-dish-grilled-600w-1713281797.jpg",
        "name": "food3"
    },
    {
        "id": "1855ba9f-2366-4a1a-a414-4f03bc2356e",
        "image": "https://image.shutterstock.com/image-photo/white-plate-homemade-beans-pancakes-600w-1728967345.jpg",
        "name": "food4"
    }
]

export {jsonData, jsonData2}
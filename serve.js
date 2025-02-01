require("dotenv").config();
const app = require("express")();
const cors = require('cors');
const port = process.env.port || 3000;

app.use(cors())

app.get("/data", (req, res) => {
  res.send([ 
    {
      id: 1,
      name: "Apple",
      price: 150,
      breed: "Fuji",
      origin: "Japan",
      color: "Red",
      description: "Sweet and crisp with a juicy texture.",
    },
    {
      id: 2,
      name: "Banana",
      price: 50,
      breed: "Cavendish",
      origin: "India",
      color: "Yellow",
      description: "Soft and creamy with a naturally sweet taste.",
    },
    {
      id: 3,
      name: "Orange",
      price: 80,
      breed: "Valencia",
      origin: "Spain",
      color: "Orange",
      description: "Citrusy and juicy with a tangy-sweet balance.",
    },
    {
      id: 4,
      name: "Mango",
      price: 120,
      breed: "Alphonso",
      origin: "India",
      color: "Yellow-Orange",
      description: "Rich and aromatic with a smooth, sweet pulp.",
    },
    {
      id: 5,
      name: "Grapes",
      price: 90,
      breed: "Thompson Seedless",
      origin: "USA",
      color: "Green",
      description: "Small, juicy, and sweet with a mild flavor.",
    },
    {
      id: 6,
      name: "Pineapple",
      price: 200,
      breed: "MD-2",
      origin: "Costa Rica",
      color: "Golden Yellow",
      description: "Tropical, sweet, and tangy with firm flesh.",
    },
    {
      id: 7,
      name: "Watermelon",
      price: 300,
      breed: "Sugar Baby",
      origin: "China",
      color: "Green outside, Red inside",
      description: "Hydrating and refreshing with a mild sweetness.",
    },
    {
      id: 8,
      name: "Strawberry",
      price: 250,
      breed: "Chandler",
      origin: "USA",
      color: "Red",
      description: "Soft, juicy, and fragrant with a sweet-tart taste.",
    },
    {
      id: 9,
      name: "Papaya",
      price: 70,
      breed: "Red Lady",
      origin: "Mexico",
      color: "Orange",
      description: "Soft, musky, and mildly sweet with a tropical flavor.",
    },
    {
      id: 10,
      name: "Pomegranate",
      price: 180,
      breed: "Wonderful",
      origin: "Iran",
      color: "Red",
      description: "Juicy arils with a perfect mix of sweet and tart.",
    },
    {
      id: 11,
      name: "Kiwi",
      price: 220,
      breed: "Hayward",
      origin: "New Zealand",
      color: "Brown outside, Green inside",
      description: "Tart and sweet with a smooth yet seedy texture.",
    },
    {
      id: 12,
      name: "Peach",
      price: 160,
      breed: "Elberta",
      origin: "China",
      color: "Pinkish-orange",
      description: "Soft and juicy with a mild sweetness.",
    },
    {
      id: 13,
      name: "Cherry",
      price: 280,
      breed: "Bing",
      origin: "USA",
      color: "Dark Red",
      description: "Small, firm, and sweet with a juicy crunch.",
    },
    {
      id: 14,
      name: "Avocado",
      price: 350,
      breed: "Hass",
      origin: "Mexico",
      color: "Dark Green",
      description: "Creamy and nutty with a buttery texture.",
    },
    {
      id: 15,
      name: "Guava",
      price: 90,
      breed: "Allahabad Safeda",
      origin: "India",
      color: "Green outside, Pink inside",
      description: "Fragrant and slightly tangy with firm flesh.",
    },
    {
      id: 16,
      name: "Dragon Fruit",
      price: 400,
      breed: "White-fleshed",
      origin: "Vietnam",
      color: "Pink outside, White inside",
      description: "Mildly sweet and refreshing with crunchy seeds.",
    },
    {
      id: 17,
      name: "Plum",
      price: 140,
      breed: "Santa Rosa",
      origin: "Japan",
      color: "Purple",
      description: "Juicy and tart-sweet with a smooth texture.",
    },
    {
      id: 18,
      name: "Blueberry",
      price: 500,
      breed: "Highbush",
      origin: "USA",
      color: "Blue",
      description: "Tiny and tangy-sweet with antioxidant-rich properties.",
    },
    {
      id: 19,
      name: "Pear",
      price: 130,
      breed: "Bartlett",
      origin: "Italy",
      color: "Yellow-Green",
      description: "Crisp and juicy with a mild sweetness.",
    },
    {
      id: 20,
      name: "Coconut",
      price: 90,
      breed: "Dwarf Coconut",
      origin: "India",
      color: "Brown outside, White inside",
      description: "Nutty and refreshing with hydrating coconut water.",
    },
  ]);
});

app.listen(port, () => {
  console.log(`server running at port ${port}`);
});

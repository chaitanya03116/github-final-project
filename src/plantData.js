const image = (query) =>
  `https://images.unsplash.com/photo-${query}?auto=format&fit=crop&w=500&q=80`;

export const categories = [
  {
    name: "Tropical Favorites",
    plants: [
      ["monstera", "Monstera Deliciosa", 28, "1593480379808-6e6c6d5f7c7c"],
      ["bird-of-paradise", "Bird of Paradise", 34, "1614594575921-a78e8fe3f7b7"],
      ["calathea", "Calathea Orbifolia", 26, "1593691509543-c55fb32e5cee"],
      ["rubber", "Ruby Rubber Plant", 24, "1509423350716-97f2360af1a4"],
      ["fiddle", "Fiddle Leaf Fig", 39, "1597055189633-1b1b1e6e3f2a"],
      ["palm", "Areca Palm", 31, "1520412099551-62b6bafeb1bb"],
    ].map(([id, name, price, photo]) => ({ id, name, price, image: image(photo) })),
  },
  {
    name: "Low-Light Living",
    plants: [
      ["snake", "Snake Plant", 18, "1593482892290-f54927ae2c48"],
      ["zz", "ZZ Plant", 22, "1632207691144-9e7c2d0b9a2c"],
      ["pothos", "Golden Pothos", 16, "1600411833116-0c7f7b4f4e3a"],
      ["cast-iron", "Cast Iron Plant", 21, "1614594975525-e45190c55d0b"],
      ["peace-lily", "Peace Lily", 23, "1593691509543-c55fb32e5cee"],
      ["heartleaf", "Heartleaf Philodendron", 19, "1545239351-1141bd82e8a6"],
    ].map(([id, name, price, photo]) => ({ id, name, price, image: image(photo) })),
  },
  {
    name: "Desk & Small Spaces",
    plants: [
      ["pilea", "Pilea Peperomioides", 17, "1586878341523-7d7a4e1f3b30"],
      ["succulent", "Echeveria Succulent", 12, "1459411621453-7b03977f4bfc"],
      ["aloe", "Aloe Vera", 14, "1596547609652-7f6d4e5e3d90"],
      ["peperomia", "Peperomia Hope", 18, "1593691509543-c55fb32e5cee"],
      ["cactus", "Moon Cactus", 13, "1509423350716-97f2360af1a4"],
      ["fern", "Button Fern", 20, "1597055189633-1b1b1e6e3f2a"],
    ].map(([id, name, price, photo]) => ({ id, name, price, image: image(photo) })),
  },
];

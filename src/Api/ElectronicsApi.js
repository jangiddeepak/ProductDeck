export const products = [
  
  {
    "id": 2,
    "title": "All new earphones with Bass booster",
    "price": 10,
    "description": "Elevate your casual wardrobe with our Classic Red Pullover Hoodie. Crafted with a soft cotton blend for ultimate comfort, this vibrant red hoodie features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs for a snug fit. The timeless design ensures easy pairing with jeans or joggers for a relaxed yet stylish look, making it a versatile addition to your everyday attire.",
    "images": [
      "https://previews.123rf.com/images/mysteryshot/mysteryshot1905/mysteryshot190500020/122303271-metal-ear-buds-and-wires-on-blue-background-low-angle-with-copy-space.jpg",
      "https://i.imgur.com/FDwQgLy.jpeg",
      "https://i.imgur.com/kg1ZhhH.jpeg"
    ],
    "creationAt": "2024-12-03T06:28:26.000Z", 
    "updatedAt": "2024-12-03T06:28:26.000Z",
    "category": {
      "id": 1,
      "name":  "electronics",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2024-12-03T06:28:26.000Z",
      "updatedAt": "2024-12-03T07:21:03.000Z"
    }
  },
  {
    "id": 3,
    "title": "All new Game Controller",
    "price": 69,
    "description": "Stay cozy and stylish with our Classic Heather Gray Hoodie. Crafted from soft, durable fabric, it features a kangaroo pocket, adjustable drawstring hood, and ribbed cuffs. Perfect for a casual day out or a relaxing evening in, this hoodie is a versatile addition to any wardrobe.",
    "images": [
      "https://www.shutterstock.com/shutterstock/photos/2284928237/display_1500/stock-vector-game-controller-in-vector-black-joystick-vector-illustration-gamepad-for-game-console-d-render-2284928237.jpg",
      "https://i.imgur.com/CFOjAgK.jpeg",
      "https://i.imgur.com/wbIMMme.jpeg"
    ],
    "creationAt": "2024-12-03T06:28:26.000Z",
    "updatedAt": "2024-12-03T06:28:26.000Z",
    "category": {
      "id": 1,
      "name": "electronics",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2024-12-03T06:28:26.000Z",
      "updatedAt": "2024-12-03T07:21:03.000Z"
    }
  },
  {
    "id": 4,
    "title": "RGb game controller",
    "price": 90,
    "description": "Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.",
    "images": [
      "https://www.shutterstock.com/shutterstock/photos/1983827018/display_1500/stock-photo-modern-white-gamepad-illuminated-in-red-and-blue-game-controller-for-video-games-and-e-sports-on-a-1983827018.jpg",
      "https://i.imgur.com/IvxMPFr.jpeg",
      "https://i.imgur.com/7eW9nXP.jpeg"
    ],
    "creationAt": "2024-12-03T06:28:26.000Z",
    "updatedAt": "2024-12-03T06:28:26.000Z",
    "category": {
      "id": 1,
      "name":  "electronics",
      "image": "https://i.imgur.com/QkIa5tT.jpeg",
      "creationAt": "2024-12-03T06:28:26.000Z",
      "updatedAt": "2024-12-03T07:21:03.000Z"
    }
  },
  
 
]
    export const Electronicsapicaller = async () => {
      return new Promise((resolve) => {
      setTimeout(() => {
        resolve(products); // Resolve with categories after a simulated delay
      }, 1000); // Simulate a delay of 1 second
      });
      };
      
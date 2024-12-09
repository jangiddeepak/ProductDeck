
export const categories = [
    {
      id: 1,
      name: "Clothes",
      image: "https://i.imgur.com/QkIa5tT.jpeg"
      
    },
    {
      id: 2,
      name: "Electronics",
      image: "https://i.imgur.com/ZANVnHE.jpeg"
    },
    {
      id: 5,
      name: "Accessories",
      image: "/images/Dashboard/accesoriesDashboard.jpg"
    },
    {
      id: 4,
      name: "Furniture",
      image: "/images/Dashboard/furntureDashboard.jpg"
    },
  ];
  

export const apifetch = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories); // Resolve with categories after a simulated delay
    }, 1000); // Simulate a delay of 1 second
  });
};

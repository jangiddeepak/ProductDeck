const brands=
{
    "id": 1,
    "name": "Nike",
    "image":"https://res.cloudinary.com/dmubfrefi/image/private/s--XPYRQrV7--/c_crop,h_2813,w_5000,x_0,y_0/c_scale,w_3840/f_auto/q_auto/v1/dee-about-cms-prod-medias/cf68f541-fc92-4373-91cb-086ae0fe2f88/001-nike-logos-swoosh-black.jpg?_a=BAAAV6Bs" 
  }
  

  export const brandsapicaller = async () => {
    return new Promise((resolve) => {
    setTimeout(() => {
    resolve(brands); // Resolve with categories after a simulated delay
    }, 1000); // Simulate a delay of 1 second
    });
    };
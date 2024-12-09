// apicaller.js
export const Furnitureapicaller = async () => {
    try {
      const response = await fetch('https://api.escuelajs.co/api/v1/categories/3/products');
      
      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
  
      // Parse and return the JSON response
      const data = await response.json();
      return data;
  
    } catch (error) {
      // Handle error if the fetch fails
      console.error('Error fetching data:', error);
      throw error; // Rethrow the error to be handled by the component
    }
  };
  
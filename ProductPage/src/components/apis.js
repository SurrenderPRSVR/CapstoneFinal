import axios from 'axios';

// Base URL for the API
const BASE_URL = 'https://fakestoreapi.com/products';

// Function to fetch all products
export const fetchProducts = async () => {
    const response = await axios.get(BASE_URL);
    return response.data; // Return the product data
};

// Function to fetch a specific product by ID
export const fetchProductById = async (id) => {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data; 
};

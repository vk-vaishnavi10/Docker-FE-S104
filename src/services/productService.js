import axios from "axios";

const API_BASE_URL = "http://ec2-13-49-69-195.eu-north-1.compute.amazonaws.com:8081/api/products";

export const getProducts = async (category = "") => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${category}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

export const getProductImageUrl = (imagePath) => {
  return `http://ec2-13-49-69-195.eu-north-1.compute.amazonaws.com:8081/api/products/images/${imagePath}`;
};



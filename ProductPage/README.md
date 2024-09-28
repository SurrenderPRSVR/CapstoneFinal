# React + Vite

# Shabby Chic

Shabby Chic is a frontend web development application designed to showcase twenty products with detailed information. This application utilizes React for the frontend, Axios for API, React Router for navigation between different views, CSS Inline Styles, and Material UI.


## Features

- User Authentication: Users can log in to access the products page
- Product Listing: A dynamic list of products fetched from a fake store API
- Product Details: Users can click on a product to view its details
- Responsive Design: The application is designed to be used on varios devices


## Technologies Used
- React: A JavaScript library for building user interfaces
- React Router: For routing and navigation between different pages
- Axios: For making API calls to fetch product data and product data by ID
- Material UI: For bottom navigation componenets to enhance the user experience
  
## API Reference

#### Get all Products

```http
  GET https://fakestoreapi.com/products
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get Product by ID

```http
  GET https://fakestoreapi.com/products/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Authors

- [@SurrenderPRSVR](https://github.com/SurrenderPRSVR)


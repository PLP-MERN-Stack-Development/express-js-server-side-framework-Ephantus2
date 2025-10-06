# Product API – Express.js RESTful Service

A simple RESTful API built with **Express.js** to manage products. It includes CRUD operations, request validation, authentication, custom middleware, error handling, filtering, search, and pagination


## Installation

1. **Clone the repository:**


git clone
cd REPO
Install dependencies:


npm install
Create a .env file

env
PORT=5000
Start the server:

npm start
The server will start on: http://localhost:5000

Authentication
To access protected routes (POST, PUT, DELETE), include the following header:

Authorization: Bearer secret-token
API Endpoints

Base URL

http://localhost:5000/api/products
📍 GET /api/products
Retrieve all products with optional search, filter, and pagination.

Query Parameters:
Param	Type	Description
search	string	Search by product name
minPrice	number	Filter by minimum price
page	number	Page number (default: 1)
limit	number	Items per page (default: 5)

Example Request:
GET /api/products?search=phone&minPrice=100&page=1&limit=10
Example Response:

{
  "page": 1,
  "total": 2,
  "products": [
    {
      "id": "1",
      "name": "Smartphone",
      "price": 499.99
    }
  ]
}
GET /api/products/:id
Retrieve a single product by ID.

Example Request:

GET /api/products/1
Example Response:

{
  "id": "1",
  "name": "Smartphone",
  "price": 499.99
}
POST /api/products 
Create a new product (requires token).

Request Body:

{
  "name": "Wireless Mouse",
  "price": 29.99
}
curl Example:

curl -X POST http://localhost:5000/api/products \
  -H "Authorization: Bearer secret-token" \
  -H "Content-Type: application/json" \
  -d '{"name": "Wireless Mouse", "price": 29.99}'
Example Response:

{
  "id": "3",
  "name": "Wireless Mouse",
  "price": 29.99
}
PUT /api/products/:id 
Update a product by ID (requires token).

Request Body:

{
  "name": "Updated Product Name",
  "price": 89.99
}
DELETE /api/products/:id 
Delete a product by ID (requires token).

Error Handling
All error responses follow this structure:


{
  "error": "Error message here"
}
 Common HTTP Status Codes
Code	Meaning
400	Bad Request
401	Unauthorized
404	Not Found
500	Internal Server Error



# Comic Book Store API  

This is the backend implementation of a React-based e-commerce store that manages comic books as inventory items. It provides RESTful API functionality for creating, reading, updating, and deleting comic books from the inventory.

## Features

- CRUD Operations: Add, update, retrieve, and delete comic books.
- Pagination: Support for large datasets with pagination.
- Filtering: Filter comic books based on various attributes like author, year, price, condition, etc.
- Sorting: Sort comic books by price, year, or alphabetically.

## Tech Stack

- Server: Node.js with Express.js
- Database: MongoDB (NoSQL)
- Version Control: GitHub
## Prerequisites
- Node.js
- MongoDB 
- Postman
- Git 
- nodemon(if necessary)

## Installation

Follow these steps to set up and run the project locally:

1. clone the repository:
```bash
  git clone https://github.com/yourusername/comicbook-store-api.git
```
2. Navigate to the project directory
```bash
cd comicbook-store-api
```
3. Install the dependencies:
```bash
npm install
```
4. Set up your environment variables by creating a ```.env ``` file in the project root:
```bash
MONGO_URI=your_mongodb_connection_string
PORT=5000
```
5. Start the server:
   ```bash
   npm start 
   ```
   The server will start running at ```http://localhost:5000```.

## API Endpoints
- Comic Book Management
- Create Comic Book
- Method: POST
- Endpoint: /api/comicbooks
- Body Parameters:
```bash
{
    "name": "Spider-Man",
    "author": "Stan Lee",
    "year": 1962,
    "price": 299,
    "discount": 10,
    "pages": 50,
    "condition": "new",
    "description": "First appearance of Spider-Man"
}
```
Get All Comic Books
Method: GET
Endpoint: ```/api/comicbooks?page=1&limit=10&sort=price```

 ## Query Parameters:

- page: Current page number
- limit: Number of items per page
- sort: Sort by price, year, etc. (optional)

## Get Comic Book by ID

Method: GET

Endpoint:``` /api/comicbooks/:id```


## Update Comic Book

Method: PUT

Endpoint:``` /api/comicbooks/:id```

Body Parameters (example):

```bash
{
    "price": 350,
    "condition": "used"
}
```
## Delete Comic Book
Method: DELETE

Endpoint:```/api/comicbooks/:id```

Postman Collection
A Postman Collection has been provided to make testing the API easier.

Download the Postman collection JSON file from this repository.
- Import it into Postman:
- In Postman, click File > Import.
- Select the .json file and click Open.
- All the API endpoints will be available in the collection for testing.
- Error Handling
- All API requests implement proper error handling, with meaningful error messages for invalid inputs, missing fields, or database-related issues.

## Project Structure
The project follows a modular structure:

```bash
Copy code
.
├── controllers
│   └── comicBookController.js
├── models
│   └── comicBookModel.js
├── routes
│   └── comicBookRoutes.js
├── .env
├── server.js
└── README.md
```

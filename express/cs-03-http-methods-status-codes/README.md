# CS-03: HTTP Methods & Status Codes

## Overview

This case study demonstrates how REST APIs use HTTP methods and status codes to perform CRUD operations.

A neighborhood food store system allows users to:

* View products
* Add products
* Update products
* Change product prices
* Delete products

The project follows RESTful conventions and returns meaningful HTTP status codes for every operation.

---

## Learning Objectives

* Understand HTTP methods
* Implement CRUD operations
* Return proper HTTP status codes
* Validate request data
* Build RESTful routes
* Handle errors correctly

---

## Technologies Used

* Node.js
* Express.js
* Nodemon

---

## Project Structure

```text
cs-03-http-methods-status-codes
│
├── routes
│   └── products.js
│
├── data
│   └── products.js
│
├── app.js
├── README.md
└── package.json
```

---

## HTTP Methods Used

| Method | Purpose               |
| ------ | --------------------- |
| GET    | Read data             |
| POST   | Create data           |
| PUT    | Replace data          |
| PATCH  | Partially update data |
| DELETE | Remove data           |

---

## Status Codes Used

| Code | Meaning      |
| ---- | ------------ |
| 200  | Success      |
| 201  | Created      |
| 204  | No Content   |
| 400  | Bad Request  |
| 404  | Not Found    |
| 500  | Server Error |

---

## API Routes

### Get All Products

```http
GET /products
```

### Get Product By ID

```http
GET /products/:id
```

### Create Product

```http
POST /products
```

### Update Product

```http
PUT /products/:id
```

### Update Product Price

```http
PATCH /products/:id/price
```

### Delete Product

```http
DELETE /products/:id
```

### Update Product Stock Status

```http
PATCH /products/:id/inStock
```

---

## Run Project

```bash
npm install
npm run dev
```

---

## Testing

Use:

* Postman
* Thunder Client
* curl

to test all endpoints.

---

## Conclusion

This case study introduced RESTful APIs, HTTP methods, request validation, status codes, and error handling using Express.js.

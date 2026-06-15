# CS-04: Request and Response

## Overview

This project demonstrates how Express handles requests and responses using a loyalty rewards system for FreshMart Grocery Stores.

The API allows customers to:

* Redeem loyalty points
* Transfer points to other customers
* Validate incoming requests
* Return structured responses
* Handle errors consistently

The project focuses on request validation, middleware, response formatting, and error handling.

---

## Learning Objectives

By completing this case study, I learned how to:

* Handle HTTP requests and responses in Express
* Validate incoming request data
* Use middleware for reusable logic
* Return consistent API responses
* Handle errors properly
* Build secure and reliable endpoints

---

## Technologies Used

* Node.js
* Express.js
* Nodemon

---

## Project Structure

```text
cs-04-request-and-response
│
├── routes
│   └── loyalty.js
│
├── middleware
│   ├── validateTransfer.js
│   └── errorHandler.js
│
├── data
│   └── members.js
│
├── app.js
├── package.json
├── README.md
└── .gitignore
```

---

## Features

### Redeem Loyalty Points

Allows a customer to redeem points from their account.

Endpoint:

```http
POST /loyalty/redeem
```

---

### Transfer Loyalty Points

Allows a customer to transfer points to another customer.

Endpoint:

```http
POST /loyalty/transfer
```

---

## Middleware Used

### Validation Middleware

Checks:

* Customer IDs are provided
* Points are positive integers
* Invalid requests are rejected

### Error Handling Middleware

Handles:

* Unexpected errors
* Server failures
* Consistent error responses

---

## API Endpoints

### Home Route

```http
GET /
```

Response:

```json
{
  "message": "FreshMart Loyalty API"
}
```

---

### Redeem Points

```http
POST /loyalty/redeem
```

Request Body:

```json
{
  "customerId": "11111111-1111-1111-1111-111111111111",
  "points": 100
}
```

Success Response:

```json
{
  "status": "success",
  "data": {
    "customerId": "11111111-1111-1111-1111-111111111111",
    "remainingPoints": 400
  }
}
```

---

### Transfer Points

```http
POST /loyalty/transfer
```

Request Body:

```json
{
  "fromCustomerId": "11111111-1111-1111-1111-111111111111",
  "toCustomerId": "22222222-2222-2222-2222-222222222222",
  "points": 50
}
```

Success Response:

```json
{
  "status": "success",
  "data": {
    "fromCustomerId": "11111111-1111-1111-1111-111111111111",
    "toCustomerId": "22222222-2222-2222-2222-222222222222",
    "transferredPoints": 50
  }
}
```

---

## Error Handling

### 400 Bad Request

Returned when:

* Required fields are missing
* Invalid points value is provided

Example:

```json
{
  "status": "error",
  "error": "Points must be a positive integer"
}
```

### 404 Not Found

Returned when:

* Sender does not exist
* Receiver does not exist
* Customer account is missing

Example:

```json
{
  "status": "error",
  "error": "Customer not found"
}
```

### 500 Internal Server Error

Returned when an unexpected server error occurs.

Example:

```json
{
  "status": "error",
  "error": "Internal Server Error"
}
```

---

## Run the Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Server URL:

```text
http://localhost:3000
```

---

## Testing Tools

The POST routes cannot be tested directly in the browser.

Use:

* Postman
* Thunder Client
* Insomnia

to send POST requests with JSON data.

---

## Concepts Practiced

* Request Object
* Response Object
* Middleware
* Request Validation
* Error Handling
* JSON Responses
* Status Codes
* REST API Design

---

## Conclusion

This case study demonstrates how to process requests, validate input data, return structured responses, and handle errors effectively in Express applications. These practices improve reliability, maintainability, and user experience in real-world APIs.

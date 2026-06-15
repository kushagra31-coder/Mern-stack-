# CS-05: Routing Controllers

## Overview

This project demonstrates how to organize an Express application using controllers, middleware, and request validation.

The application simulates a bakery management system called **Crumb & Craft Bakery**, where customers can place orders and bakery staff can manage baking operations.

The goal is to separate responsibilities into different controllers and create a scalable project structure.

---

## Learning Objectives

By completing this case study, I learned how to:

* Organize routes using controllers
* Separate business logic into modules
* Create and use middleware
* Validate incoming requests
* Standardize API responses
* Build scalable Express applications

---

## Technologies Used

* Node.js
* Express.js
* Nodemon

---

## Project Structure

```text
cs-05-routing-controllers
│
├── controllers
│   ├── orderController.js
│   └── bakingController.js
│
├── middleware
│   ├── validateOrder.js
│   └── logger.js
│
├── data
│   ├── orders.js
│   └── baking.js
│
├── app.js
├── package.json
├── README.md
└── .gitignore
```

---

## Features

### Order Management

* Create new bakery orders
* View all orders
* View a specific order

### Baking Management

* Start baking an order
* Check baking status

### Middleware

* Request logging
* Order validation

---

## Controllers

### Order Controller

Base Route:

```http
/orders
```

Endpoints:

```http
GET /orders
```

Returns all orders.

```http
GET /orders/:id
```

Returns a specific order.

```http
POST /orders
```

Creates a new order.

---

### Baking Controller

Base Route:

```http
/baking
```

Endpoints:

```http
POST /baking/start
```

Starts baking an order.

```http
GET /baking/status/:id
```

Returns baking status.

---

## Request Validation

The application validates:

* Customer name
* Flavor
* Quantity
* Pickup date

Rules:

* All fields are required
* Quantity must be between 1 and 100

Example Error Response:

```json
{
  "status": "error",
  "error": "All fields are required"
}
```

---

## Middleware Used

### Logger Middleware

Logs every request reaching the server.

Example:

```text
GET /orders
POST /orders
```

### Validation Middleware

Checks incoming order data before processing.

Invalid requests are rejected with status code 400.

---

## API Examples

### Create Order

```http
POST /orders
```

Request Body:

```json
{
  "customerName": "Akaza",
  "flavor": "Chocolate",
  "quantity": 3,
  "pickupDate": "2026-07-15"
}
```

Response:

```json
{
  "status": "success",
  "data": {
    "id": "2",
    "customerName": "Akaza",
    "flavor": "Chocolate",
    "quantity": 3,
    "pickupDate": "2026-07-15"
  }
}
```

---

### Start Baking

```http
POST /baking/start
```

Request Body:

```json
{
  "orderId": "1"
}
```

Response:

```json
{
  "status": "success",
  "data": {
    "orderId": "1",
    "status": "Baking"
  }
}
```

---

### Check Baking Status

```http
GET /baking/status/1
```

Response:

```json
{
  "status": "success",
  "data": {
    "orderId": "1",
    "status": "Baking"
  }
}
```

---

## Status Codes Used

| Status Code | Meaning               |
| ----------- | --------------------- |
| 200         | Success               |
| 201         | Resource Created      |
| 400         | Bad Request           |
| 404         | Resource Not Found    |
| 500         | Internal Server Error |

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

Use:

* Postman
* Thunder Client
* Insomnia

to test API endpoints.

---

## Concepts Practiced

* Express Router
* Controllers
* Middleware
* Request Validation
* Modular Project Structure
* REST APIs
* Status Codes
* JSON Responses

---

## Conclusion

This case study demonstrates how controllers improve code organization and maintainability. By separating routes, middleware, and validation logic, the application becomes easier to scale, debug, and extend with new features.

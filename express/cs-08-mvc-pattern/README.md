# CS-08: MVC Pattern

## Overview

This project demonstrates the MVC (Model View Controller) architecture using a library management system.

The application separates responsibilities into different layers:

* Models
* Controllers
* Services
* Repositories

This structure improves maintainability, scalability, and testing.

---

## Technologies Used

* Node.js
* Express.js
* Nodemon

---

## Project Structure

```text
src
├── models
├── repositories
├── services
└── controllers
```

---

## MVC Layers

### Model

Represents the Book entity.

### Repository

Handles data access operations.

### Service

Contains business rules.

### Controller

Handles HTTP requests and responses.

---

## Endpoints

### Borrow Book

```http
POST /books/:id/borrow
```

### Return Book

```http
POST /books/:id/return
```

---

## Challenge Completed

Added returnBook functionality.

The system now:

* Borrows books
* Returns books
* Prevents duplicate borrowing
* Prevents invalid returns

---

## Run Project

```bash
npm install
npm run dev
```

Server:

```text
http://localhost:3000
```

---

## Concepts Practiced

* MVC Architecture
* Repository Pattern
* Dependency Injection
* Business Logic Layer
* Controller Layer
* Service Layer

---

## Conclusion

This project demonstrates how MVC architecture improves code organization by separating concerns into independent layers. This makes applications easier to maintain, test, and extend.

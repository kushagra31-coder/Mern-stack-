# CS-09: Repository Pattern

## Overview

This project demonstrates the Repository Pattern using a university course registration system.

The application separates:

* Data Models
* Repositories
* Services
* Controllers

The Repository Pattern hides storage details from business logic and allows storage systems to be changed without affecting application behavior.

---

## Technologies Used

* Node.js
* Express.js
* Nodemon

---

## Project Structure

src
├── models
├── repositories
├── services
└── controllers

---

## Features

### Enroll Student

POST /courses/:id/enroll

### Get Student Courses

GET /students/:id/courses

### Delete Course

DELETE /courses/:id

---

## Repository Pattern Benefits

* Centralized data access
* Easier testing
* Better maintainability
* Storage independence
* Cleaner business logic

---

## Run

npm install

npm run dev

Server runs on:

http://localhost:3000

---

## Challenge Completed

Added delete(courseId) method.

Implemented:

* Repository delete function
* Service delete logic
* Controller delete endpoint

---

## Concepts Practiced

* Repository Pattern
* Dependency Injection
* MVC Architecture
* Service Layer
* Data Access Layer

---

## Conclusion

The Repository Pattern separates storage concerns from business logic, making applications easier to maintain, test, and scale.

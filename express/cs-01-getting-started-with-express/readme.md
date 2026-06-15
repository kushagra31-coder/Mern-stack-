# CS-01: Getting Started with Express

## Overview

This project is the first Express.js case study based on the Greenfield Community Center scenario.

The goal is to create a simple Express server that allows community members to:

* View a welcome page
* Check upcoming events
* Access contact information

This project demonstrates the fundamentals of Express.js including server creation, routing, handling requests, and sending responses.

---

## Learning Objectives

By completing this case study, I learned:

* What Express.js is and why it is used
* How to install and configure Express
* How to create and run a web server
* How routes work in Express
* How to send text and JSON responses
* How Express handles client requests

---

## Technologies Used

* Node.js
* Express.js
* Nodemon

---

## Project Structure

```text
cs-01-getting-started-with-express
│
├── node_modules
├── src
│   └── app.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

Install Express:

```bash
npm install express
```

Install Nodemon:

```bash
npm install --save-dev nodemon
```

---

## Running the Project

Start the application:

```bash
npm run dev
```

The server will run on:

```text
http://localhost:3000
```

---

## Available Routes

### Home Route

**GET /**

Returns a welcome message.

Example Response:

```text
Welcome to Greenfield Community Center!
```

---

### Events Route

**GET /events**

Returns a list of upcoming events.

Example Response:

```json
[
  "Yoga Class - Monday 7pm",
  "Gardening Workshop - Wednesday 5pm",
  "Book Club - Friday 6pm"
]
```

---

### Contact Route

**GET /contact**

Returns contact information.

Example Response:

```json
{
  "email": "info@greenfieldcenter.com",
  "phone": "+1 555 123 4567"
}
```

---

## Key Express Concepts Used

### Express Application

```javascript
const express = require("express");
const app = express();
```

Creates the Express application instance.

### Routes

```javascript
app.get("/", (req, res) => {});
```

Defines a route that listens for GET requests.

### Request Object

```javascript
req
```

Contains information sent by the client.

### Response Object

```javascript
res
```

Used to send responses back to the client.

### Sending Text

```javascript
res.send()
```

Sends text or HTML content.

### Sending JSON

```javascript
res.json()
```

Sends JSON data.

### Starting the Server

```javascript
app.listen()
```

Starts the Express server and listens for incoming requests.

---

## Challenges Completed

* Created a homepage route
* Added an events route
* Added a contact route
* Returned JSON responses
* Tested routes in browser

---

## Output URLs

```text
http://localhost:3000/
```

```text
http://localhost:3000/events
```

```text
http://localhost:3000/contact
```

---

## Conclusion

This case study introduced the fundamentals of Express.js. It demonstrated how to create a server, define routes, handle requests, and return responses. These concepts form the foundation for building REST APIs and full-stack MERN applications.

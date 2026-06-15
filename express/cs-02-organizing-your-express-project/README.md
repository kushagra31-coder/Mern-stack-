# CS-02: Organizing Your Express Project

## Overview

This case study focuses on structuring an Express application for scalability and maintainability.

Instead of placing all routes in a single file, each feature is moved into its own route module. This approach makes the project easier to read, debug, and extend as new functionality is added.

---

## Learning Objectives

* Understand why project structure matters
* Organize routes into separate files
* Use Express Router
* Mount routers using app.use()
* Serve static files using a public folder
* Build a scalable Express application structure

---

## Technologies Used

* Node.js
* Express.js
* Nodemon

---

## Project Structure

```text
cs-02-organizing-your-express-project
│
├── routes
│   ├── events.js
│   ├── classes.js
│   └── contact.js
│
├── public
│
├── app.js
├── package.json
├── README.md
└── .gitignore
```

---

## Features

### Home Route

Returns a welcome message.

```text
/
```

### Events Route

Returns upcoming community events.

```text
/events
```

### Classes Route

Returns available classes.

```text
/classes
```

### Contact Route

Returns contact information.

```text
/contact
```

---

## Concepts Practiced

* Express Router
* Route Modularization
* app.use()
* Static File Serving
* Project Organization
* Separation of Concerns

---

## Run Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## Conclusion

A modular folder structure improves maintainability, teamwork, and scalability. Organizing routes into separate files allows developers to add features without cluttering the main application file.

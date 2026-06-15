# CS-07: Request Validation

## Overview

This project demonstrates request validation using Express and express-validator.

The application simulates a university admissions system where every application must be validated before processing.

The system checks:

* Name
* Email
* Birthdate
* Grades
* Essay
* Recommendation Letter
* Portfolio Link

Only valid applications are accepted.

---

## Technologies Used

* Node.js
* Express.js
* Express Validator
* Nodemon

---

## Project Structure

```text
cs-07-request-validation
│
├── routes
│   └── application.js
│
├── validations
│   └── applicationValidation.js
│
├── app.js
├── package.json
├── README.md
└── .gitignore
```

---

## Validation Rules

| Field                | Validation                 |
| -------------------- | -------------------------- |
| name                 | Required                   |
| email                | Valid Email                |
| birthdate            | Valid Date                 |
| grades               | Array with minimum 1 grade |
| grades.*             | Numeric values             |
| essay                | Minimum 100 characters     |
| recommendationLetter | Valid URL                  |
| portfolioLink        | Valid URL                  |

---

## Endpoint

### Submit Application

```http
POST /apply
```

Example Request:

```json
{
  "name": "Akaza",
  "email": "akaza@example.com",
  "birthdate": "2006-01-15",
  "grades": [88, 92, 95],
  "essay": "This essay contains more than one hundred characters and explains why I want admission into the university.",
  "recommendationLetter": "https://example.com/recommendation.pdf",
  "portfolioLink": "https://portfolio.example.com"
}
```

Success Response:

```json
{
  "status": "Application received!"
}
```

---

## Error Response Example

```json
{
  "errors": [
    {
      "msg": "Valid email is required"
    }
  ]
}
```

---

## Run Project

```bash
npm install
npm run dev
```

---

## Concepts Practiced

* Request Validation
* Validation Middleware
* Error Handling
* Express Validator
* REST APIs

---

## Conclusion

This project demonstrates how request validation improves data quality, prevents invalid submissions, and provides users with clear feedback before processing applications.

# CS-06: Middleware

## Overview

This project demonstrates how middleware works in Express using a hospital discharge management system.

The application simulates the discharge workflow at CityCare General Hospital. Every patient discharge request must pass through multiple checkpoints before completion.

Middleware is used to validate approvals, track workflow progress, and handle errors consistently.

---

## Learning Objectives

By completing this case study, I learned how to:

* Understand middleware in Express
* Create custom middleware
* Chain multiple middleware functions
* Track request flow using logs
* Handle errors centrally
* Build reliable request processing pipelines

---

## Technologies Used

* Node.js
* Express.js
* Nodemon

---

## Project Structure

```text
cs-06-middleware
│
├── middleware
│   ├── logDischarge.js
│   ├── doctorSignoff.js
│   ├── pharmacyReview.js
│   ├── followupCheck.js
│   ├── insuranceCheck.js
│   └── errorHandler.js
│
├── routes
│   └── discharge.js
│
├── app.js
├── package.json
├── README.md
└── .gitignore
```

---

## Middleware Flow

Every discharge request passes through:

1. Request Logging
2. Doctor Sign-off Verification
3. Pharmacy Review Verification
4. Follow-up Scheduling Verification
5. Insurance Approval Verification
6. Discharge Completion

---

## API Endpoint

### Complete Patient Discharge

```http
POST /discharge
```

Request Body:

```json
{
  "patientName": "Sarah",
  "doctorSigned": true,
  "pharmacyChecked": true,
  "followupScheduled": true,
  "insuranceApproved": true
}
```

Success Response:

```json
{
  "status": "Discharge Complete",
  "patient": "Sarah"
}
```

---

## Middleware Used

### logDischarge

Tracks every discharge step and stores timestamps.

### doctorSignoff

Ensures doctor approval exists.

### pharmacyReview

Ensures medications are reviewed.

### followupCheck

Ensures follow-up appointments are scheduled.

### insuranceCheck

Ensures insurance approval exists.

### errorHandler

Handles unexpected server errors.

---

## Status Codes

| Code | Meaning                |
| ---- | ---------------------- |
| 200  | Success                |
| 400  | Missing Approval       |
| 403  | Insurance Not Approved |
| 500  | Internal Server Error  |

---

## Run Project

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Server URL:

```text
http://localhost:3000
```

---

## Concepts Practiced

* Express Middleware
* Custom Middleware
* Middleware Chaining
* Request Logging
* Validation
* Error Handling
* HTTP Status Codes

---

## Conclusion

This project demonstrates how middleware creates checkpoints within a workflow. By validating every stage and logging progress, the application becomes more reliable, maintainable, and easier to debug.

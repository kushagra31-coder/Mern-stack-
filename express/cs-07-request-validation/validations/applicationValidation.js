const { body } = require("express-validator");

const applicationValidation = [
    body("name")
        .notEmpty()
        .withMessage("Name is required"),

    body("email")
        .isEmail()
        .withMessage("Valid email is required"),

    body("birthdate")
        .isISO8601()
        .withMessage("Birthdate must be valid"),

    body("grades")
        .isArray({ min: 1 })
        .withMessage("At least one grade is required"),

    body("grades.*")
        .isNumeric()
        .withMessage("Grades must be numbers"),

    body("essay")
        .isLength({ min: 100 })
        .withMessage("Essay must be at least 100 characters"),

    body("recommendationLetter")
        .isURL()
        .withMessage("Recommendation letter must be a valid URL"),

    body("portfolioLink")
        .isURL()
        .withMessage(
            "A valid portfolio link is required for art applicants."
        )
];

module.exports = applicationValidation;
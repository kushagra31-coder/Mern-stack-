const express = require("express");

const CourseRepository = require("./src/repositories/courseRepository");
const CourseService = require("./src/services/courseService");
const CourseController = require("./src/controllers/courseController");

const app = express();

app.use(express.json());

const courseRepository = new CourseRepository();

const courseService = new CourseService(
    courseRepository
);

const courseController =
    new CourseController(
        courseService
    );

app.post(
    "/courses/:id/enroll",
    (req, res) =>
        courseController.enroll(
            req,
            res
        )
);

app.get(
    "/students/:id/courses",
    (req, res) =>
        courseController.getStudentCourses(
            req,
            res
        )
);

app.delete(
    "/courses/:id",
    (req, res) =>
        courseController.deleteCourse(
            req,
            res
        )
);

app.listen(3000, () => {
    console.log(
        "University system running on port 3000"
    );
});
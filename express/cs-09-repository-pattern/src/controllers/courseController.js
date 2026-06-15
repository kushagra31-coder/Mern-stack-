class CourseController {
    constructor(
        courseService
    ) {
        this.courseService =
            courseService;
    }

    enroll(req, res) {
        try {
            const result =
                this.courseService.enroll(
                    req.params.id,
                    req.body.studentId
                );

            res.json(result);
        } catch (error) {
            res.status(400).json({
                error:
                    error.message
            });
        }
    }

    getStudentCourses(
        req,
        res
    ) {
        const courses =
            this.courseService.getStudentCourses(
                req.params.id
            );

        res.json(courses);
    }

    deleteCourse(
        req,
        res
    ) {
        try {
            const result =
                this.courseService.deleteCourse(
                    req.params.id
                );

            res.json(result);
        } catch (error) {
            res.status(400).json({
                error:
                    error.message
            });
        }
    }
}

module.exports =
    CourseController;
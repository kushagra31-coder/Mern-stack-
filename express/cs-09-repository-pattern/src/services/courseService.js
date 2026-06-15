class CourseService {
    constructor(
        courseRepository
    ) {
        this.courseRepository =
            courseRepository;
    }

    enroll(
        courseId,
        studentId
    ) {
        const course =
            this.courseRepository.findById(
                courseId
            );

        if (!course) {
            throw new Error(
                "Course not found"
            );
        }

        if (
            course.students.length >=
            course.capacity
        ) {
            throw new Error(
                "Course full"
            );
        }

        this.courseRepository.enrollStudent(
            courseId,
            studentId
        );

        return {
            message:
                "Enrolled successfully"
        };
    }

    getStudentCourses(
        studentId
    ) {
        return this.courseRepository.findByStudentId(
            studentId
        );
    }

    deleteCourse(courseId) {
        const deleted =
            this.courseRepository.delete(
                courseId
            );

        if (!deleted) {
            throw new Error(
                "Course not found"
            );
        }

        return {
            message:
                "Course deleted successfully"
        };
    }
}

module.exports =
    CourseService;
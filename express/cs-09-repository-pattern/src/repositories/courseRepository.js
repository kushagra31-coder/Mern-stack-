const Course = require(
    "../models/course"
);

class CourseRepository {
    constructor() {
        this.courses = [
            new Course(
                "1",
                "Physics 101",
                2
            ),
            new Course(
                "2",
                "Mathematics",
                3
            )
        ];
    }

    findAll() {
        return this.courses;
    }

    findById(id) {
        return (
            this.courses.find(
                course =>
                    course.id === id
            ) || null
        );
    }

    enrollStudent(
        courseId,
        studentId
    ) {
        const course =
            this.findById(courseId);

        if (
            course &&
            !course.students.includes(
                studentId
            )
        ) {
            course.students.push(
                studentId
            );
        }
    }

    findByStudentId(
        studentId
    ) {
        return this.courses.filter(
            course =>
                course.students.includes(
                    studentId
                )
        );
    }

    delete(courseId) {
        const index =
            this.courses.findIndex(
                course =>
                    course.id ===
                    courseId
            );

        if (index === -1) {
            return false;
        }

        this.courses.splice(
            index,
            1
        );

        return true;
    }
}

module.exports =
    CourseRepository;
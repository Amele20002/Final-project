import React from 'react';

const CourseList = ({ courses }) => {
    return (
        <div>
            <h2>Course List</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.course_id}>
                        {course.course_name} - {course.instructor}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseList;
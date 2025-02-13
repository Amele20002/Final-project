import React from 'react';

const StudentList = ({ students }) => {
    return (
        <div>
            <h2>Student List</h2>
            <ul>
                {students.map(student => (
                    <li key={student.student_id}>
                        {student.name} - {student.email} - {student.age} years old
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StudentList;
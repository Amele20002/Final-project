- Create students table
CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    enrollment_date DATE NOT NULL
);

-- Create courses table
CREATE TABLE courses (
    course_id SERIAL PRIMARY KEY,
    course_name VARCHAR(100) NOT NULL,
    instructor VARCHAR(100) NOT NULL
);

-- Create enrollments table (to link students and courses)
CREATE TABLE enrollments (
    enrollment_id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(student_id),
    course_id INT REFERENCES courses(course_id),
    enrollment_date DATE NOT NULL
);
-- Insert sample students
INSERT INTO students (first_name, last_name, email, enrollment_date)
VALUES 
    ('Aman', 'yohannes', 'aman.doe@example.com', '2023-09-01'),
    ('Amen', 'Henock', 'amen.smith@example.com', '2023-09-01'),
    ('Heran', 'Zelalem', 'heri.johnson@example.com', '2023-09-01'),
    ('Bontu', 'Tesfaye', 'bon.brown@example.com', '2023-09-01'),
    ('Yonatan', 'Abate', 'yoni.davis@example.com', '2023-09-01'),
    ('Eva', 'solomon', 'eva.sol@example.com', '2023-09-01');

-- Insert sample courses
INSERT INTO courses (course_name, instructor)
VALUES 
    ('Mathematics', 'Dr. Amen Zelalem'),
    ('Computer Science', 'Prof. Dagimawi Moges'),
    ('Physics', 'Dr. selam Abate'),
    ('Chemistry', 'Dr. Eleni Kidane'),
    ('Biology', 'Dr. Fanose Weldie'),
    ('History', 'Dr. Genet Baman');    

-- Insert sample enrollments
INSERT INTO enrollments (student_id, course_id, enrollment_date)
VALUES 
    (1, 1, '2023-09-01'),  -- John enrolled in Mathematics
    (2, 2, '2023-09-01');  -- Jane enrolled in Computer Science
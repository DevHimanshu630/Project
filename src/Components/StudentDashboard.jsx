import React, { useState } from 'react';
import '../CSS/Student.css'
// import courseModel from './CourseModel';

// i can take data from coursemodel but there is lot of courses 
//  also i am totally confused regarding student dashbaord , because there is no detail as per the requirment for the dashboard

const courseModel = {
  courses: [
    {
      id: 1,
      name: 'Mathematics 101',
      instructor: 'Dr. Smith',
      description: 'Introduction to basic mathematics',
      enrollmentStatus: 'Enrolled',
      duration: '10 weeks',
      schedule: 'Mon/Wed 10:00 AM - 11:30 AM',
      location: 'Room A123',
      prerequisites: [],
      syllabus: [
        { week: 1, topic: 'Introduction', content: 'Course overview' },
        { week: 2, topic: 'Algebra', content: 'Basic algebra concepts' },
        
      ],
      students: [
        { id: 101, name: 'John Doe', email: 'john@example.com' },
        { id: 102, name: 'Jane Smith', email: 'jane@example.com' },
       
      ],
    },
  ],
};

function StudentDashboard() {
  const [selectedCourse, setSelectedCourse] = useState(null);

 
  const renderCourseDetails = (course) => {
    return (
      <div>
        <h3>{course.name}</h3>
        <p>Instructor: {course.instructor}</p>
        <p>Description: {course.description}</p>
        <p>Enrollment Status: {course.enrollmentStatus}</p>
        <p>Duration: {course.duration}</p>
        <p>Schedule: {course.schedule}</p>
        <p>Location: {course.location}</p>
        <p>Prerequisites: {course.prerequisites.join(', ')}</p>

        <h4>Syllabus:</h4>
        <ul>
          {course.syllabus.map((item) => (
            <li key={item.week}>
              Week {item.week}: {item.topic}
              <p>{item.content}</p>
            </li>
          ))}
        </ul>

        <h4>Students Enrolled:</h4>
        <ul>
          {course.students.map((student) => (
            <li key={student.id}>
              ID: {student.id}
              <p>Name: {student.name}</p>
              <p>Email: {student.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Function to handle course selection
  const handleCourseSelection = (courseId) => {
    const course = courseModel.courses.find((c) => c.id === courseId);
    setSelectedCourse(course);
  };

  return (
    <div>
      <h2>Student Dashboard</h2>
      <h3>My Courses</h3>
      <ul>
        {courseModel.courses.map((course) => (
          <li key={course.id}>
            {course.name} - <button onClick={() => handleCourseSelection(course.id)}>View Details</button>
          </li>
        ))}
      </ul>

      {selectedCourse ? (
        <div>
          <h3>Course Details</h3>
          {renderCourseDetails(selectedCourse)}
        </div>
      ) : (
        <p>Select a course to view details.</p>
      )}
    </div>
  );
}

export default StudentDashboard;

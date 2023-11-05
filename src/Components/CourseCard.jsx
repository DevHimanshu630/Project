import React, { useState } from 'react';
import '../CSS/CourseCard.css';

const CourseCard = ({ course }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="course-card">
      <img src={course.thumbnail} alt={course.name} />
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(', ')}</p>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>
      {showDetails && (
        <div className="course-details">
          <h3>Course Details</h3>
          <p>{course.description}</p>
          <h3>Syllabus</h3>
          <ul>
            {course.syllabus.map((item) => (
              <li key={item.week}>
                <strong>Week {item.week}:</strong> {item.topic}
                <br />
                <strong>{item.content}</strong> {item.content}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CourseCard;



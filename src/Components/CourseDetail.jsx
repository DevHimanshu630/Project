import React, { useState } from 'react'
import CourseListing from './CourseListing';
function CourseDetail({course}) {

  return (
    <div>
        <h1>Course Detail</h1>
        
        <img src={course.thumbnail} alt={course.name} />
      <h2>{course.name}</h2>
      <p>Instructor: {course.instructor}</p>
      <p>Enrollment Status: {course.enrollmentStatus}</p>
      <p>Duration: {course.duration}</p>
      <p>Schedule: {course.schedule}</p>
      <p>Location: {course.location}</p>
      <p>Prerequisites: {course.prerequisites.join(', ')}</p>
      
      {course.syllabus.map((item) => (
        <details key={item.week}>
            <summary>{item.topic}</summary>
            <p>{item.content}</p>
        </details>
      ))}
      
      
    </div>
  )
}

export default CourseDetail
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import courseModel from "./CourseModel";
const CourseListing = () => {
  // const courses = courseModel.courses;
  const [courses] = useState(courseModel.courses); // Assuming courseModel has a 'courses' array
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="center">
      <div style={{ textAlign: "center" }}>
        <h1>Course Listing</h1>
        <br />
        <input
          type="text"
          placeholder="Search by courses name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <br />
      <br />
      <br />
      {filteredCourses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

export default CourseListing;

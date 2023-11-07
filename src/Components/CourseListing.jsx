import React, { useState } from "react";
import courseModel from "./CourseModel";
import CourseDetail from "./CourseDetail";
import '../CSS/CourseCard.css'

const CourseListing = () => {

  const [courses] = useState(courseModel.courses); 
  const [searchTerm, setSearchTerm] = useState("");
  const [isListed, setisListed] = useState(true);
  const [details, setDetails] = useState({});
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const ViewDetails = (course) => {
    setisListed(false);
    setSelectedCourse(course);
  };

  const Goback = () => {
    setisListed(true);
  };

  return (
    <div className="center">
      {isListed ? (
        <div>
          <div className="container">
            <h1>Course Listing</h1>
            <br />
            <input
              type="text"
              placeholder="Search by courses name"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="main-card">
              {filteredCourses.map((course) => (
                
                    <div className="course-card">
                    <img src={course.thumbnail} alt={course.name} />
                    <h2>{course.name}</h2>
                    <p>Instructor: {course.instructor}</p>
                    <button onClick={() => ViewDetails(course)}>View Details</button>
                    </div>
                
                ))}
            </div>
        </div>
      ) : (
        <div>
          {selectedCourse && (
            <>
              <CourseDetail course={selectedCourse} />
              <button onClick={Goback} style={{width:"150px" ,height:"40px"}} >Go Back</button>
            </>
          )}
        </div>
      )}

      {/* {isListed && (
           <CourseDetail  key={course.id} course={course} />
         
        )} */}
    </div>
  );
};

export default CourseListing;

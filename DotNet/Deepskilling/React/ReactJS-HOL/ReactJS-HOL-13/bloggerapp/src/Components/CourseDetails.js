import React from "react";

function CourseDetails({ courses, showCourses }) {
  // Conditional rendering with logical && operator
  const noticeBanner = courses.length > 5 && <p>New batches opening soon!</p>;

  // Conditional rendering using an element variable + switch statement
  let statusElement;
  switch (true) {
    case courses.length === 0:
      statusElement = <p>No courses listed yet.</p>;
      break;
    case courses.length < 3:
      statusElement = <p>Only a few courses available.</p>;
      break;
    default:
      statusElement = <p>Multiple courses available.</p>;
  }

  return (
    <div>
      <h2>Course Details</h2>
      {noticeBanner}
      {statusElement}
      {showCourses && (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>{course}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CourseDetails;

import React from "react";
import "./App.css";
import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

const books = ["Atomic Habits", "The Pragmatic Programmer", "Clean Code"];
const courses = ["ReactJS", "Node.js", "Java", "Python", "DevOps", "AWS"];

function App() {
  return (
    <div className="App">
      <h1>Blogger App</h1>
      <BookDetails books={books} />
      <hr />
      <BlogDetails isPublished={true} title="Getting Started with React" />
      <hr />
      <CourseDetails courses={courses} showCourses={true} />
    </div>
  );
}

export default App;

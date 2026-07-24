import React from "react";

function BlogDetails({ isPublished, title }) {
  // Conditional rendering with the ternary operator
  return (
    <div>
      <h2>Blog Details</h2>
      {isPublished ? (
        <p>"{title}" is published and live.</p>
      ) : (
        <p>"{title}" is still in draft.</p>
      )}
    </div>
  );
}

export default BlogDetails;

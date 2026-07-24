import React, { Component } from "react";
import Post from "./Post";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false,
      errorMessage: ""
    };
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        const posts = data
          .slice(0, 10)
          .map((item) => new Post(item.id, item.title, item.body));
        this.setState({ posts });
      })
      .catch((error) => {
        this.setState({ hasError: true, errorMessage: error.message });
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true, errorMessage: error.message });
    alert("Something went wrong while loading posts: " + error.message);
  }

  render() {
    if (this.state.hasError) {
      return <p>Error loading posts: {this.state.errorMessage}</p>;
    }

    return (
      <div className="posts">
        {this.state.posts.map((post) => (
          <div key={post.id} className="post">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;

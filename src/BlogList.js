import React from "react";
import { Link } from "react-router";
import blogPosts from "./blogPosts";

function BlogList() {
  return (
    <div className="container">
      <h1>Blog Posts</h1>
      <ul className="blog-list">
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
            <p>{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;

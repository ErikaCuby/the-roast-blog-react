import React from "react";
import { Link } from "react-router";
import blogPosts from "./blogPosts";

function BlogList() {
  return (
    <div>
      <h1>The Roast Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;

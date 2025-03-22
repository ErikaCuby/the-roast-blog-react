import React from "react";
import { useParams, Link } from "react-router";
import blogPosts from "./blogPosts";

function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div className="container blog-post">
      <h1>{post.title}</h1>
      <p>
        <strong>Date:</strong> {post.date}
      </p>
      <p>{post.content}</p>
      <Link to="/" className="back-link">
        ← Back to Blog
      </Link>
    </div>
  );
}

export default BlogPost;

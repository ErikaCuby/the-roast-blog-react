import React from "react";
import { useParams } from "react-router";
import blogPosts from "./blogPosts";

function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

export default BlogPost;

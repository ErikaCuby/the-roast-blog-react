import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import blogPosts from "./blogPosts";

function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return <h2>Post not found</h2>;
  }

  return (
    <motion.div
      className="container blog-post"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>{post.title}</h1>
      <p>
        <strong>Date:</strong> {post.date}
      </p>
      {post.image && (
        <img src={post.image} alt={post.title} className="blog-image" />
      )}
      <p>{post.content}</p>
      <Link to="/" className="back-link">
        ← Back to Blog
      </Link>
    </motion.div>
  );
}

export default BlogPost;

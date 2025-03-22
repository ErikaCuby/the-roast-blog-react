import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import blogPosts from "./blogPosts";

function BlogList() {
  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h1>Blog Posts</h1>
      <ul className="blog-list">
        {blogPosts.map((post) => (
          <motion.li
            key={post.id}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
            <p>{post.date}</p>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

export default BlogList;

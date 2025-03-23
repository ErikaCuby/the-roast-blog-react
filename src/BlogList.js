import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import blogPosts from "./blogPosts";

function BlogList() {
  const featuredPost = blogPosts[0]; // Display the first post as featured

  return (
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Featured Blog Post Section */}
      <div className="featured-post">
        <h2>🌟 Featured Blog Post</h2>
        <img
          src={featuredPost.image}
          alt={featuredPost.title}
          className="featured-image"
        />
        <h3>{featuredPost.title}</h3>
        <p>{featuredPost.content.substring(0, 100)}...</p>
        <Link to={`/blog/${featuredPost.id}`} className="read-more">
          Read More →
        </Link>
      </div>

      {/* All Blog Posts */}
      <h1>All Blog Posts</h1>
      <ul className="blog-list">
        {blogPosts.slice(1).map((post) => (
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

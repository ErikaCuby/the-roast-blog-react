import React, { useEffect } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import blogPosts from "./blogPosts";
import RelatedCarousel from "./RelatedCarousel";

function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  useEffect(() => {
    if (post) {
      document.title = `${post.title} | The Roast Blog`;

      const meta = document.querySelector('meta[name="description"]');
      const description = post.subtitle;

      if (meta) {
        meta.setAttribute("content", description);
      } else {
        const newMeta = document.createElement("meta");
        newMeta.name = "description";
        newMeta.content = description;
        document.head.appendChild(newMeta);
      }
    }
  }, [post]);

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
      <div
        className="blog-post"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>

      <Link to="/" className="back-link">
        ← Back to Blog
        <RelatedCarousel currentPostId={postId} />
      </Link>
    </motion.div>
  );
}

export default BlogPost;

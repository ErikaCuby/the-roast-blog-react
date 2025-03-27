import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion";
import blogPosts from "./blogPosts";
import RelatedCarousel from "./RelatedCarousel";
import NotFound from "./NotFound";
import ErikaOSQuiz from "./fun-components/ErikaOSQuiz";

function BlogPost() {
  const { postId } = useParams();
  const post = blogPosts.find((p) => p.id === postId);

  const [showQuiz, setShowQuiz] = useState(false);
  const handleToggleQuiz = () => setShowQuiz((prev) => !prev);


  // ✅ Scroll to top when postId changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

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
    return <NotFound />;
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

      {post.showQuiz && (
        <div className="quiz-cta-wrapper">
          <button onClick={handleToggleQuiz} className="cta-button">
            {showQuiz
              ? "Okay, fine. Show me the damage."
              : "Check Your Own Desktop Before You Judge Hers"}
          </button>

          <div className={`quiz-reveal ${showQuiz ? "show" : ""}`}>
            {showQuiz && <ErikaOSQuiz />}
          </div>
        </div>
      )}

      <Link to="/" className="back-link">
        ← Back to Blog
      </Link>

      <RelatedCarousel currentPostId={postId} />
    </motion.div>
  );
}

export default BlogPost;

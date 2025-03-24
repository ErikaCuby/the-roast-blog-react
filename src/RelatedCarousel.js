import React from "react";
import { Link } from "react-router-dom";
import blogPosts from "./blogPosts";

function RelatedCarousel({ currentPostId }) {
  const filteredPosts = blogPosts.filter((p) => p.id !== currentPostId);
  const loopedPosts = [...filteredPosts, ...filteredPosts]; // duplicate for smooth loop

  return (
    <div>
      <h2 className="carousel-title">Still Not Done? More Sass Here ↓</h2>
      <div className="carousel">
        <div className="carousel-track">
          {loopedPosts.slice(0, 12).map((item, index) => (
            <Link
              to={`/blog/${item.id}`}
              key={`${item.id}-${index}`}
              className="carousel-item"
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedCarousel;

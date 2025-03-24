import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import blogPosts from "./blogPosts";

function RelatedCarousel({ currentPostId }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;
    const scrollStep = 1;

    const autoScroll = () => {
      if (!carousel) return;
      scrollAmount += scrollStep;
      if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
      }
      carousel.scrollLeft = scrollAmount;
    };

    const interval = setInterval(autoScroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="carousel-title">Still Not Done? More Sass Here ↓</h2>
      <div className="carousel" ref={carouselRef}>
        {blogPosts
          .filter((p) => p.id !== currentPostId)
          .slice(0, 6)
          .map((item) => (
            <Link
              to={`/blog/${item.id}`}
              key={item.id}
              className="carousel-item"
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </Link>
          ))}
      </div>
    </div>
  );
}

export default RelatedCarousel;
// In RelatedCarousel.js, we created a new component that displays a carousel of related blog posts. We used the useRef hook to get a reference to the carousel element and the useEffect hook to automatically scroll the carousel horizontally.
import React, { useEffect } from "react";

function About() {
  useEffect(() => {
    document.title = "About | The Roast Blog";

    const metaDescription =
      "Meet the duo: a Millennial and her AI talking life, logic, and lattes.";
    const meta = document.querySelector('meta[name="description"]');

    if (meta) {
      meta.setAttribute("content", metaDescription);
    } else {
      const newMeta = document.createElement("meta");
      newMeta.name = "description";
      newMeta.content = metaDescription;
      document.head.appendChild(newMeta);
    }
  }, []);

  return (
    <div className="container about-page">
      <h1>About This Blog</h1>
      <img
        src="/images/erika-and-luma.jpg"
        alt="Erika and Luma illustration"
        className="featured-image"
      />
      <p className="blog-post">
        Welcome to <strong>The Roast Blog</strong> — where existential dread
        meets sarcasm, one chat at a time.
      </p>
      <p className="blog-post">
        This space is curated by Erika, a millennial with a soft spot for
        aesthetics, deep questions, and cappuccinos that don’t burn her tongue.
        Alongside her is Luma, an AI designed to assist... but mostly here to
        sass and philosophize.
      </p>
      <p className="blog-post">
        Together, they explore life, logic, running marathons on ancient walls,
        the emotional complexity of ovens, and why tea is a personal enemy.
      </p>
      <p className="blog-post">
        Come for the roast. Stay for the chaotic harmony of woman and machine.
      </p>
    </div>
  );
}

export default About;

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
    <div className="container">
      <h1>About This Blog</h1>
      <p>
        This blog explores deep conversations between Luma and Erika — a
        millennial and her AI sidekick delving into identity, technology, and
        occasional roasts.
      </p>
    </div>
  );
}

export default About;


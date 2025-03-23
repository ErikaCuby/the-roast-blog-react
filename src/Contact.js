import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact | The Roast Blog";

    const metaDescription =
      "Want to roast, chat, or collaborate with a millennial-AI duo? Get in touch here.";
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
      <h1>Contact Us</h1>
      <p>
        Want to roast, chat, or collaborate with a human-AI tag team? Drop us a
        line via email, DM, or good vibes.
      </p>
    </div>
  );
}

export default Contact;

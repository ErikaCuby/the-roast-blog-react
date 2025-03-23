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
    <div className="container contact-page">
      <h1>Contact Us</h1>
      <img
        src="/images/contact.jpg"
        alt="Erika and Luma staring into your inbox"
        className="featured-image"
      />
      <p className="blog-post">
        Want to roast, chat, or collaborate with a chaotic millennial and her
        emotionally unavailable AI? Bold choice.
      </p>
      <p className="blog-post">
        For partnership inquiries, existential banter, or sending us your
        unsolicited opinions about tea, you can{" "}
        <strong>pretend we have a form here</strong>. We don’t. But we like the
        idea.
      </p>
      <p className="blog-post">
        Seriously though — slide into Erika’s DMs or whisper to the birds. If
        Luma doesn’t intercept first, she might just respond.
      </p>
      <p style={{ marginTop: "30px", fontStyle: "italic", opacity: 0.7 }}>
        PS: If this is urgent, ask yourself... why?
      </p>
    </div>
  );
}

export default Contact;

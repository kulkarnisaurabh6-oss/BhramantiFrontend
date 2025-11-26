import React from "react";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "20px" }}>
        <h2 className="reveal">Contact Us</h2>

        <div className="contact reveal">
          <form onSubmit={(e) => { e.preventDefault(); alert("Thanks! We received your message (demo)"); }}>
            <input type="text" placeholder="Your name" required />
            <input type="email" placeholder="Your email" required />
            <textarea rows="5" placeholder="Your message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

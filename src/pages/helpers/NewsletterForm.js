import React from "react";

export default function NewsletterForm() {
  return (
    <div className="newsletter-container">
      <div>
        <h2>Join our newsletter</h2>
        <p>Building a collaborative research community!</p>
      </div>
      <div className="newsletter-subscribe">
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="newsletter-input"
        />
        <button className="newsletter-button">SUBSCRIBE</button>
      </div>
    </div>
  );
}

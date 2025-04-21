import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "./ContactPage.css";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const complaint = { ...form };
    const complaints = JSON.parse(localStorage.getItem("complaints") || "[]");
    complaints.push(complaint);
    localStorage.setItem("complaints", JSON.stringify(complaints));
    alert("Complaint submitted successfully!");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="info-section">
          <FaPhoneAlt className="info-icon" />
          <h3>Call To Us</h3>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +91 8102334400</p>
          <hr />
        </div>

        <div className="info-section">
          <FaEnvelope className="info-icon" />
          <h3>Write To Us</h3>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: akumar@gmail.com</p>
          <p>Emails: skumar@gmail.com</p>
        </div>
      </div>

      <div className="contact-form">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <input
              type="text"
              placeholder="Your Name *"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              type="email"
              placeholder="Your Email *"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <input
              type="tel"
              placeholder="Your Phone *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
          </div>
          <textarea
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;

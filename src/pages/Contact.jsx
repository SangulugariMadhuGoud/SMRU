import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [inquiryForm, setInquiryForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    course: '',
    inquiryType: '',
    message: '',
  });

  // 🔁 Input Change Handler
  const handleInquiryInput = (e) => {
    const { name, value } = e.target;
    setInquiryForm((prev) => ({ ...prev, [name]: value }));
  };

  // 📤 Submit to Google Sheets via Apps Script
  const handleInquirySubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.entries(inquiryForm).forEach(([key, value]) =>
      formData.append(key, value)
    );
    formData.append("timestamp", new Date().toISOString());

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxaCTLS4oEypzIZ1YGE5q6Pd_Y51OHDvWZN-oUFaie34rbLxD1tu4X_i29pm8ajFSs/exec", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        alert("Inquiry submitted successfully!");

        // ✅ Reset form
        setInquiryForm({
          fullName: '',
          email: '',
          phone: '',
          course: '',
          inquiryType: '',
          message: '',
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Network error. Try again.");
    }
  };

  return (
    <>
      {/* ─── Banner ─── */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
        <p>
          Questions about admissions, programs, or support? Drop us a message and the SMRU team <br />
          will get back to you within one business day.
        </p>
      </div>

      <section className="contact-section">
        <div className="contact-container">
          {/* ─── Left Info ─── */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              We’re here to help you on your educational journey. Whether you have
              questions about our courses, admissions, or campus life, we’re ready
              to assist.
            </p>

            <ul className="contact-details">
              <li>
                <span className="icon">📍</span>
                <div>
                  <strong>Our Address</strong>
                  <br />
                  St. Mary's Rehabilitation University, Near Ramoji Film City, Behind Mount Opera,
                  Deshmukhi (V), Pochampally (M), Yadadri Bhongir (Dist), Hyderabad, Telangana - 508284
                </div>
              </li>
              <li>
                <span className="icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <br />
                  General: <a href="tel:+919010455590">+91 90104-55590</a><br />
                  WhatsApp: <a href="tel:+919154929260">+91 91549-29260</a><br />
                  Admissions: <a href="tel:+919010455591">+91 90104-55591</a>
                </div>
              </li>
              <li>
                <span className="icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <br />
                  General: <a href="mailto:reach@smru.in">reach@smru.in</a>
                </div>
              </li>
            </ul>

            <div className="office-hours-row">
              <div className="office-hours">
                <strong>Office Hours</strong>
                <br />
                Mon - Sat: 9:30 AM - 5:00 PM
                <br />
                Sun: Closed
              </div>
              <div className="emergency-contact">
                <strong>Emergency Contact</strong>
                <br />
                Campus Security (24/7):<br />
                +91 90104-55590
              </div>
            </div>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?origin=mfe&pb=!1m4!2m1!1sst.+marys+group+of+institutions,+deshmuki+village,+deshmukhi,+telangana+501512!5e0!6i10"
                title="SMRU Campus Location"
                loading="lazy"
              />
            </div>
          </div>

          {/* ─── Right Form ─── */}
          <div className="contact-form">
            <form onSubmit={handleInquirySubmit}>
              <label>
                Full Name
                <input
                  type="text"
                  name="fullName"
                  placeholder="Sri Ram"
                  value={inquiryForm.fullName}
                  onChange={handleInquiryInput}
                  required
                />
              </label>

              <label>
                Email Address
                <input
                  type="email"
                  name="email"
                  placeholder="Madhu@example.com"
                  value={inquiryForm.email}
                  onChange={handleInquiryInput}
                  required
                />
              </label>

              <label>
                Phone Number
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9123456789"
                  value={inquiryForm.phone}
                  onChange={handleInquiryInput}
                  required
                />
              </label>

              <label>
                Course of Interest
                <select
                  name="course"
                  value={inquiryForm.course}
                  onChange={handleInquiryInput}
                  required
                >
                  <option value="">Select</option>
                  <option>Rehabilitation & Allied Health</option>
                  <option>Psychology & Behavioral Sciences</option>
                  <option>Medical & Clinical Sciences</option>
                  <option>Life Sciences & Biomedical Research</option>
                  <option>Genetics & Neuroscience</option>
                  <option>Education & Special Education</option>
                  <option>Management & Health Administration</option>
                </select>
              </label>

              <label>
                Inquiry Type
                <select
                  name="inquiryType"
                  value={inquiryForm.inquiryType}
                  onChange={handleInquiryInput}
                  required
                >
                  <option value="">Select</option>
                  <option>General</option>
                  <option>Admissions</option>
                  <option>Hostel</option>
                  <option>Others</option>
                </select>
              </label>

              <label>
                Message
                <textarea
                  name="message"
                  rows="4"
                  placeholder="Type your message here…"
                  value={inquiryForm.message}
                  onChange={handleInquiryInput}
                  required
                />
              </label>

              <button type="submit">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

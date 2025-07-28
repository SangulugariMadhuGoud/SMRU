import React, { useState, useCallback, memo } from 'react';
import '../styles/Home.css';
import { useNavigate } from 'react-router-dom';
// ADD THIS LINE
import useOpenApply from '../hooks/useOpenApply';

import {
  FaAward,
  FaHeartbeat,
  FaHandsHelping,
  FaChartLine,
  FaQuoteLeft,
  FaShieldAlt,
  FaBrain,
  FaStethoscope,
  FaChalkboardTeacher,
  FaUsers,
  FaBullseye,
  FaBolt,
} from 'react-icons/fa';
import { GiRunningShoe } from 'react-icons/gi';

// Memoized Accordion Component for performance.
const Accordion = memo(function Accordion({ faqs }) {
  const [open, setOpen] = useState(null);
  return (
    <div className="faqs-list">
      {faqs.map((faq, idx) => (
        <div className={`faqs-item${open === idx ? " open" : ""}`} key={idx}>
          <button className="faqs-question" aria-expanded={open === idx} onClick={() => setOpen(open === idx ? null : idx)}>
            <span>{faq.question}</span>
            <span className="faqs-toggle">{open === idx ? "−" : "+"}</span>
          </button>
          <div className="faqs-answer" style={{ display: open === idx ? "block" : "none" }}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
});

// The component NO LONGER needs openApplyModal as a prop
const Home = () => {
  const navigate = useNavigate();

  // ADD THIS LINE: Use the Apply Now modal from context
  const openApplyModal = useOpenApply();

  const testimonialData = [
    { quote: "SMRU empowers us to approach every learner with care and strategy. The institution truly values inclusive education.", name: 'M. Harish', role: 'Special Educator', course: 'Faculty – Dept. of Special Education' },
    { quote: "As a psychology mentor, I appreciate SMRU’s focus on clinical training and real-time case analysis. It sets the foundation for professional success.", name: 'Roselin Singh', role: 'Clinical Psychology Faculty', course: 'Faculty – Allied Health Sciences' },
    { quote: "The student-friendly environment, world-class labs, and practical exposure make SMRU a leader in rehab education.", name: 'Venkatesh', role: 'Senior Lab Instructor', course: 'Technical Staff – Physiotherapy Dept.' },
    { quote: "I’ve seen hundreds of students grow into confident professionals through SMRU’s practice-based curriculum and mentorship model.", name: 'T. Shyam', role: 'Training & Outreach Head', course: 'Faculty Coordinator – Clinical Outreach' },
    { quote: "SMRU gave me the confidence to speak, learn, and heal others. Today I’m interning at a top rehabilitation center thanks to my faculty!", name: 'Abhaya', role: 'BPT Student', course: 'Bachelor of Physiotherapy • 3rd Year' },
    { quote: "Our classes are interactive and hands-on. From the labs to the lectures, everything feels connected to real clinical life.", name: 'Abdul', role: 'M.Sc. Psychology Student', course: '2nd Year • Clinical Psychology' },
    { quote: "Thanks to SMRU, I got placed in a reputed speech and audiology center. The training here prepares us for real-world challenges.", name: 'Lohith', role: 'BASLP Student', course: 'Bachelor of Audiology • Final Year' },
  ];

  const [index, setIndex] = useState(0);
  const total = testimonialData.length;

  const next = useCallback(() => setIndex((prevIndex) => (prevIndex + 1) % total), [total]);
  const prev = useCallback(() => setIndex((prevIndex) => (prevIndex - 1 + total) % total), [total]);

  const campusItems = [
    { icon: <FaShieldAlt />, title: 'Modern Hostels', desc: 'Comfortable accommodation with 24/7 security' },
    { icon: <GiRunningShoe />, title: 'Sports Complex', desc: 'State-of-the-art facilities for physical fitness' },
    { icon: <FaBrain />, title: 'Advanced Labs', desc: 'Cutting-edge simulation and research labs' },
    { icon: <FaStethoscope />, title: 'Wellness Center', desc: 'Comprehensive health and wellness facilities' },
    { icon: <FaBullseye />, title: 'Green Spaces', desc: 'Eco-friendly campus with meditation gardens' },
    { icon: <FaBolt />, title: 'Innovation Hub', desc: 'Technology integration for modern learning' },
  ];

  const faqs = [
    { question: "What programs are offered at SMRU?", answer: "SMRU offers UG, PG, and doctoral programs in Rehabilitation, Allied Health Sciences, Clinical Psychology, and more. Check our Academics page for details." },
    { question: "Is campus accommodation available?", answer: "Yes, modern hostels are available for boys and girls, with 24/7 security, Wi-Fi, and other amenities." },
    { question: "How can I apply for admission?", answer: "Apply online on our website or use the Quick Enquiry form. Our team will assist you throughout the process." },
    { question: "Are scholarships available?", answer: "SMRU offers both merit-based and need-based scholarships. Visit the Scholarships page for eligibility and application details." },
    { question: "Is SMRU recognized by government bodies?", answer: "Yes, SMRU is approved by UGC and aligned with NCAHP standards for health sciences programs. Our courses meet national academic and clinical regulations." },
    { question: "What kind of placement support is available?", answer: "Our dedicated placement cell offers career guidance, internship support, and recruitment drives with top hospitals, clinics, and wellness centers across India." },
  ];

  const handleDownloadBrochure = useCallback(() => {
    window.open('/brochure.pdf', '_blank');
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <h1 className="hero-title">
            Empowering Through <span className="hero-highlight">Rehabilitation</span>
          </h1>
          <p className="hero-subtitle">
            India's leading university for aspiring healthcare professionals. Discover what makes us the preferred choice for students making a difference for patients across the nation.
          </p>
          <div className="hero-buttons">
            {/* Use the context-powered Apply Now modal */}
            <button className="hero-btn hero-apply" onClick={openApplyModal}>Apply Now</button>
            <button className="hero-btn hero-brochure" onClick={handleDownloadBrochure}>Download Brochure</button>
          </div>
          <section className="hero-stats-section">
            <div className="hero-stats">
              <h3 className="hero-achievements-title">Achievements Done by St. Mary's Group</h3>
              <div className="hero-stat-items">
                <div className="hero-stat-item"><strong>29+</strong><span>Years Experience</span></div>
                <div className="hero-stat-item"><strong>9.6L+</strong><span>Alumni</span></div>
                <div className="hero-stat-item"><strong>96%</strong><span>Placement Rate</span></div>
                <div className="hero-stat-item"><strong>102+</strong><span>Recruiters</span></div>
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="why-section">
        <div className="why-container">
          <h2 className="why-title">Why Choose SMRU?</h2>
          <p className="why-subtitle">Discover what makes us the preferred choice for aspiring healthcare professionals across India.</p>
          <div className="why-grid">
            <div className="why-card"><div className="why-icon"><FaHeartbeat size={26} color="#fff" /></div><h3 className="why-heading">Rehab-Focused Curriculum</h3><p className="why-text">Specialized programs designed for comprehensive rehabilitation care.</p></div>
            <div className="why-card"><div className="why-icon"><FaHandsHelping size={26} color="#fff" /></div><h3 className="why-heading">Clinical Training + Outreach</h3><p className="why-text">Hands-on training with real-world community service integration.</p></div>
            <div className="why-card"><div className="why-icon"><FaAward size={26} color="#fff" /></div><h3 className="why-heading">29+ Years of Experience</h3><p className="why-text">A leading education group with a proven track record of success since 1998.</p></div>
            <div className="why-card"><div className="why-icon"><FaChartLine size={26} color="#fff" /></div><h3 className="why-heading">Top Placement Record</h3><p className="why-text">95% placement rate achieved for engineering students of St. Mary’s Group in top-tier companies across India.</p></div>
          </div>
        </div>
      </section>

      {/* TEACHING SECTION */}
      <section className="teaching-section">
        <div className="teaching-container">
          <h2 className="teaching-title">Teaching Techniques at SMRU</h2>
          <p className="teaching-subtitle">We follow advanced, practice-based teaching methods that ensure deep understanding and real-world readiness.</p>
          <div className="teaching-grid">
            <div className="teaching-card"><div className="teaching-icon"><FaBrain /></div><h3>Activity-Based Therapy</h3><p>Goal-directed, functional tasks aligned with rehabilitation needs.</p></div>
            <div className="teaching-card"><div className="teaching-icon"><FaStethoscope /></div><h3>Simulation-Based Practice</h3><p>Hands-on experience through clinical simulations.</p></div>
            <div className="teaching-card"><div className="teaching-icon"><FaChalkboardTeacher /></div><h3>Multisensory Learning</h3><p>Tools to suit every learner's cognitive pathway.</p></div>
            <div className="teaching-card"><div className="teaching-icon"><FaUsers /></div><h3>Peer-Led Case Discussions</h3><p>Collaborative learning through structured analysis.</p></div>
          </div>
        </div>
      </section>

      {/* CAMPUS SECTION */}
      <section className="campus-section">
        <h2>World-Class Campus</h2>
        <p className="campus-subtitle">Experience learning in a state-of-the-art environment designed for holistic development</p>
        <div className="campus-grid">
          {campusItems.map((item, index) => (
            <div className="campus-card" key={index}>
              <div className="campus-icon">{item.icon}</div>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="testimonial-section">
        <h2>Success Stories</h2>
        <p className="testimonial-subtitle">Hear what our dedicated staff and passionate students have to say about their journey at SMRU.</p>
        <div className="testimonial-box">
          <FaQuoteLeft className="quote-icon" />
          <p className="testimonial-text">"{testimonialData[index].quote}"</p>
          <div className="author-info">
            <h4>{testimonialData[index].name}</h4>
            <p className="role">{testimonialData[index].role}</p>
            <p className="course">{testimonialData[index].course}</p>
          </div>
        </div>
        <div className="testimonial-controls">
          <button className="circle-btn" onClick={prev}>&lt;</button>
          <button className="circle-btn" onClick={next}>&gt;</button>
        </div>
      </section>

      {/* FAQ & ENQUIRY SECTION */}
      <section id="enquiry-form-section" className="faqenq-section">
        <h2 className="faqenq-title">Frequently Asked Questions</h2>
        <div className="faqenq-row">
          <div className="faqenq-left"><Accordion faqs={faqs} /></div>
          {/* <div className="faqenq-right">
            <form className="enquiry-form">
              <h3>Quick Enquiry</h3>
              <p>Get information about our programs</p>
              <input type="text" placeholder="Full Name *" required />
              <input type="email" placeholder="Email *" required />
              <input type="tel" placeholder="Phone Number *" required />
              <select required>
                <option value="">Select a program</option>
                <option>BPT</option>
                <option>MPT</option>
                <option>Clinical Psychology</option>
              </select>
              <textarea placeholder="Message (Optional)"></textarea>
              <button type="submit">Submit Enquiry</button>
            </form>
          </div> */}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta-section">
        <h2 className="cta-title">Ready to Shape Your Future?</h2>
        <p className="cta-subtitle">
          Discover our cutting-edge programs and take the first step towards a rewarding career<br />
          in healthcare and rehabilitation.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn primary" onClick={() => navigate('/departments')}>
            View All Programs
          </button>
          <button className="cta-btn secondary" onClick={() => navigate('/admissions')}>
            Admissions Info
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

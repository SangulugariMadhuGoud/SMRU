import React, { useState, createContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import DepartmentsOverview from './pages/DepartmentsOverview';
import DepartmentDetail from './pages/DepartmentDetail';
import Admissions from './pages/Admissions';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Footer from './components/Footer';

import "./App.css";

// Context to trigger Apply Modal from anywhere
export const ApplyModalContext = createContext({
  openApplyModal: () => { },
});

function App() {
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [applicationType, setApplicationType] = useState('student');
  const [applyForm, setApplyForm] = useState({
    fullName: '',
    email: '',
    mobile: '',
    program: '',
    message: '',
    qualification: '',
    specialization: '',
  });

  const whatsappNumber = "9154929260";

  // ✅ Google Apps Script Web App URL
  const scriptURL = "https://script.google.com/macros/s/AKfycbxjqEHIHGp0GzN5CBQs6qPIU1szPq45C-gnPE0F2ZrgcO0CHMLff5LAWk0-cURRaV0h/exec";

  // Handle input changes
  const handleApplyInput = e => {
    const { name, value } = e.target;
    setApplyForm(prev => ({ ...prev, [name]: value }));
  };

  // ✅ Submit using FormData (Google Apps Script requires this)
  const handleApplySubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("applicationType", applicationType);
    formData.append("fullName", applyForm.fullName);
    formData.append("email", applyForm.email);
    formData.append("mobile", applyForm.mobile);
    formData.append("program", applyForm.program);
    formData.append("message", applyForm.message);
    formData.append("qualification", applyForm.qualification);
    formData.append("specialization", applyForm.specialization);
    formData.append("timestamp", new Date().toISOString());

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbxI4fzSvgmqGkX39jUXkzGCp_nz9zFYOJvae6GQ5kS-Nw5y7qTxYQoamWmVoafFINxJ/exec", {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Application submitted successfully!');

        // ✅ Reset the form fields after success
        setApplyForm({
          fullName: '',
          email: '',
          mobile: '',
          program: '',
          message: '',
          qualification: '',
          specialization: '',
        });
        setApplicationType('student');
        setShowApplyModal(false);
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('Network issue. Try again later.');
    }
  };

  const openApplyModal = () => setShowApplyModal(true);

  return (
    <ApplyModalContext.Provider value={{ openApplyModal }}>
      <Router>
        <Navbar />
        <ScrollToTop smooth={true} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/departments" element={<DepartmentsOverview />} />
          <Route path="/departments/:id" element={<DepartmentDetail />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* Floating Apply Now Button */}
        <button
          className="floating-apply-button-vertical"
          onClick={openApplyModal}
          aria-label="Apply Now"
        >
          <span>Apply Now</span>
        </button>

        {/* WhatsApp Button */}
        <a
          className="floating-whatsapp-button"
          href={`https://wa.me/${whatsappNumber}?text=Hello%20SMRU%20Team%2C%20I%20have%20a%20query.`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
        </a>

        {/* Apply Now Modal */}
        {showApplyModal && (
          <div className="apply-modal-overlay">
            <div className="apply-modal-content">
              <button className="modal-close-button" onClick={() => setShowApplyModal(false)}>
                &times;
              </button>
              <h2>Apply to SMRU</h2>

              {/* Tabs for selecting application type */}
              <div className="application-type-selector">
                <button
                  className={`type-button ${applicationType === 'student' ? 'active' : ''}`}
                  onClick={() => setApplicationType('student')}
                >
                  Student Application
                </button>
                <button
                  className={`type-button ${applicationType === 'faculty' ? 'active' : ''}`}
                  onClick={() => setApplicationType('faculty')}
                >
                  Faculty/Staff Application
                </button>
              </div>

              {/* Student Form */}
              {applicationType === 'student' ? (
                <form className="apply-form" onSubmit={handleApplySubmit}>
                  <h3>Student Application</h3>
                  <input type="text" name="fullName" placeholder="Full Name" value={applyForm.fullName} onChange={handleApplyInput} required />
                  <input type="email" name="email" placeholder="Email Address" value={applyForm.email} onChange={handleApplyInput} required />
                  <input type="tel" name="mobile" placeholder="Mobile Number" value={applyForm.mobile} onChange={handleApplyInput} required />
                  <select name="program" value={applyForm.program} onChange={handleApplyInput} required>
                    <option value="">Select Program</option>
                    <option value="BPT">Bachelor of Physiotherapy (BPT)</option>
                    <option value="MPT">Masters in Rehab Technology</option>
                    <option value="NRC">Neuro Rehab Certification</option>
                    <option value="BOT">BSc in Occupational Therapy</option>
                    <option value="PHD">Ph.D. in Rehabilitation Sciences</option>
                  </select>
                  <textarea name="message" placeholder="Your Message / Academic Background" rows="4" value={applyForm.message} onChange={handleApplyInput} />
                  <button type="submit">Submit Student Application</button>
                </form>
              ) : (
                // Faculty Form
                <form className="apply-form" onSubmit={handleApplySubmit}>
                  <h3>Faculty Application</h3>
                  <input type="text" name="fullName" placeholder="Full Name" value={applyForm.fullName} onChange={handleApplyInput} required />
                  <input type="email" name="email" placeholder="Email Address" value={applyForm.email} onChange={handleApplyInput} required />
                  <input type="tel" name="mobile" placeholder="Mobile Number" value={applyForm.mobile} onChange={handleApplyInput} />
                  <input type="text" name="qualification" placeholder="Highest Qualification" value={applyForm.qualification} onChange={handleApplyInput} required />
                  <input type="text" name="specialization" placeholder="Area of Specialization" value={applyForm.specialization} onChange={handleApplyInput} required />
                  <textarea name="message" placeholder="Your Message / Research Interests" rows="4" value={applyForm.message} onChange={handleApplyInput} />
                  <button type="submit">Submit Faculty Application</button>
                </form>
              )}
            </div>
          </div>
        )}

        <Footer />
      </Router>
    </ApplyModalContext.Provider>
  );
}

export default App;

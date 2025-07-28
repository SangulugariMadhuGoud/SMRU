import React from 'react'
import '../styles/Admissions.css';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
// 👉 Import the modal opener hook
import useOpenApply from '../hooks/useOpenApply';

const Admissions = () => {
  // 👉 Get the global openApplyModal function
  const openApplyModal = useOpenApply();

  const steps = [
    {
      id: 1,
      title: 'Collect Application Form',
      desc: 'Visit the campus and obtain your application form',
      icon: '📄',
      status: 'active'
    },
    {
      id: 2,
      title: 'Fill Out Application',
      desc: 'Complete your application form manually with accurate details',
      icon: '✍️',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Attach Documents',
      desc: 'Include copies of necessary certificates and documents',
      icon: '📎',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Submit Application & Pay Fee',
      desc: 'Submit your application at the admissions office and pay the fee in person',
      icon: '🏫',
      status: 'upcoming'
    },
  ];

  const documents = [
    "10th Grade Mark Sheet and Certificate",
    "12th Grade Mark Sheet and Certificate",
    "Transfer Certificate",
    "Conduct Certificate",
    "Passport Size Photographs (6 copies)",
    "Aadhar Card Copy",
    "Caste Certificate (if applicable)",
    "Income Certificate",
    "Migration Certificate (for other state students)",
  ];

  return (
    <>
      {/* Admission section Banner  */}
      <section className="admissions-banner">
        <div className="admissions-content">
          <h2>Admissions 2025</h2>
          <p>
            Begin your journey in healthcare and rehabilitation. Applications are now open for all programs.
          </p>
          <div className="admissions-buttons">
            {/* 👉 Use context modal opener here */}
            <button className="apply-button" onClick={openApplyModal}>
              Apply Now <FaArrowRight className="arrow-icon" />
            </button>
            <a href="/downloads/SMRU-Brochure.pdf" className="brochure-button" download>
              <FaDownload className="download-icon" /> Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* Application process section */}
      <section className="application-section">
        <h2 className="app-title">Application Process</h2>
        <p className="app-subtitle">
          Follow these simple steps to complete your admission application
        </p>
        <div className="app-progress">
          <span>Application Progress</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: '25%' }}></div>
          </div>
          <span className="step-indicator">1 of 4</span>
        </div>
        <div className="step-grid">
          {steps.map(step => (
            <div
              key={step.id}
              className={`step-card ${step.status}`}
            >
              <div className="step-icon">{step.icon}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-desc">{step.desc}</div>
              <div className="step-number">{step.id}</div>
            </div>
          ))}
        </div>
        <div className="note-box">
          <span className="note-icon">ℹ️</span>
          <span>
            <strong>Important:</strong> Complete all steps before the deadline. Late
            applications will not be considered.
          </span>
        </div>
      </section>

      {/* Required Documents section */}
      <section className="required-docs-section">
        <h2 className="docs-title">Required Documents</h2>
        <p className="docs-subtitle">
          Prepare these documents before starting your application process
        </p>
        <div className="docs-grid">
          {documents.map((doc, index) => (
            <div className="doc-item" key={index}>
              <span className="doc-icon">📄</span>
              <span className="doc-text">{doc}</span>
            </div>
          ))}
        </div>
        <div className="note-box">
          <span className="note-icon">ℹ️</span>
          <span><strong>Note:</strong> All documents should be original or attested copies. Scanned copies should be clear and legible.</span>
        </div>
      </section>
    </>
  )
}

export default Admissions;

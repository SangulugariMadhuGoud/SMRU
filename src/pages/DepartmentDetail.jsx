import React, { useState } from "react";

export default function DepartmentDetail({ program }) {
  const [open, setOpen] = useState(null);

  if (!program) return null;

  return (
    <div className="program-card">
      <h4>{program.title}</h4>
      <div className="program-info">
        <div className="info-box">
          <span role="img" aria-label="Degree">🎓</span>
          <span>
            Degree Level<br />
            <b>{program.degree}</b>
          </span>
        </div>
        <div className="info-box">
          <span role="img" aria-label="Duration">⏳</span>
          <span>
            Duration<br />
            <b>{program.duration}</b>
          </span>
        </div>
        <div className="info-box">
          <span role="img" aria-label="Intake">👥</span>
          <span>
            Total Intake<br />
            <b>{program.intake}</b>
          </span>
        </div>
        <div className="info-box">
          <span role="img" aria-label="Fees">₹</span>
          <span>
            Fees<br />
            <b>{program.fees}</b>
          </span>
        </div>
      </div>
      <div className="program-overview">
        <div className="overview-title">
          <span role="img" aria-label="Info">&#9432;</span> Program Overview :
        </div>
        <div className="overview-text">{program.overview}</div>
      </div>
      <div className="accordion">
        {/* Eligibility */}
        <div className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => setOpen(open === "eligibility" ? null : "eligibility")}
            type="button"
          >
            {open === "eligibility" ? "▼" : "►"} Eligibility Criteria - Academic Qualification
          </button>
          <div
            className="accordion-body"
            style={{ display: open === "eligibility" ? "block" : "none" }}
          >
            {program.eligibility}
          </div>
        </div>
        {/* Career Path */}
        <div className="accordion-item">
          <button
            className="accordion-header"
            onClick={() => setOpen(open === "career" ? null : "career")}
            type="button"
          >
            {open === "career" ? "▼" : "►"} Career Path
          </button>
          <div
            className="accordion-body"
            style={{ display: open === "career" ? "block" : "none" }}
          >
            {program.career}
          </div>
        </div>
      </div>
      <button className="apply-btn" type="button">
        Apply Now &rarr;
      </button>
    </div>
  );
}

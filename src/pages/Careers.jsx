import React, { useState } from "react";
import { FiUsers, FiAward, FiBookOpen, FiTrendingUp, FiMapPin, FiMail } from "react-icons/fi";
import "../styles/Careers.css";


const benefits = [
  { icon: <FiUsers />, text: "Supportive Team Culture" },
  { icon: <FiBookOpen />, text: "Growth & Research Opportunities" },
  { icon: <FiAward />, text: "Employee Wellness Benefits" },
  { icon: <FiTrendingUp />, text: "Career Development" },
];

const jobsData = [
  {
    id: 1,
    title: "Assistant Professor – BPT",
    category: "Faculty",
    location: "Rehab & Allied Health",
    desc: "Teach, guide students & lead clinical research in physiotherapy.",
    details: [
      "PhD/MPT in Physiotherapy required.",
      "Minimum 2 years teaching or clinical experience.",
      "Research and mentorship skills preferred.",
      "UGC/RCI norms apply."
    ]
  },
  {
    id: 2,
    title: "Admissions Officer",
    category: "Admin",
    location: "Main Office",
    desc: "Counsel prospective students & manage admissions operations.",
    details: [
      "Graduate, excellent communication.",
      "1+ year experience in education industry.",
      "Familiar with MS Office, CRM tools."
    ]
  },
  {
    id: 3,
    title: "IT Support Engineer",
    category: "IT",
    location: "SMRU Campus",
    desc: "Maintain campus IT infra, troubleshoot issues, manage EdTech tools.",
    details: [
      "B.Tech/Graduate with IT skills.",
      "Hands-on hardware & networking.",
      "Experience with Google/Microsoft tools a plus."
    ]
  }
];

const categories = ["All", "Faculty", "Admin", "IT"];

export default function Careers() {
  const [filter, setFilter] = useState("All");
  const [modalJob, setModalJob] = useState(null);

  const jobs = filter === "All"
    ? jobsData
    : jobsData.filter((j) => j.category === filter);

  // Handle form state (demo only, no backend)
  const [form, setForm] = useState({ name: "", email: "", phone: "", position: "", cv: "", message: "" });
  const handleChange = e => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0].name : value });
  };

  return (
    <section className="career-page">
      {/* Hero */}
      <header className="career-hero">
        <h1>Careers at SMRU</h1>
        <p>Join India’s pioneering university in rehabilitation & allied health sciences. <br />
          Shape the future of healthcare and education with us!</p>
      </header>

      {/* Benefits */}
      <section className="career-benefits">
        {benefits.map((b, i) => (
          <div className="benefit-card" key={i}>
            <span className="benefit-icon">{b.icon}</span>
            <span>{b.text}</span>
          </div>
        ))}
      </section>

      {/* Job Openings */}
      <section className="career-jobs">
        <div className="jobs-header">
          <h2>Current Openings</h2>
          <div className="job-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={filter === cat ? "active" : ""}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="jobs-list">
          {jobs.length === 0 && (
            <p className="no-jobs">No openings in this category currently.</p>
          )}
          {jobs.map((job) => (
            <div className="job-card" key={job.id}>
              <div>
                <h3>{job.title}</h3>
                <p className="job-meta"><FiMapPin /> {job.location} <span className="job-cat">{job.category}</span></p>
                <p className="job-desc">{job.desc}</p>
              </div>
              <button className="view-btn" onClick={() => setModalJob(job)}>
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Job Modal */}
      {modalJob && (
        <div className="job-modal-backdrop" onClick={() => setModalJob(null)}>
          <div className="job-modal" onClick={e => e.stopPropagation()}>
            <h3>{modalJob.title}</h3>
            <p className="job-meta"><FiMapPin /> {modalJob.location} <span className="job-cat">{modalJob.category}</span></p>
            <ul>
              {modalJob.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <button className="close-btn-x" onClick={() => setModalJob(null)} aria-label="Close">&times;</button>
          </div>
        </div>
      )}

      {/* Contact HR */}
      <section className="career-contact">
        <h2>Contact Careers Team</h2>
        <p>
          <FiMail /> Email: <a href="mailto:careers@smru.edu">reach@smru.in</a>
        </p>
        <p>
          St. Mary’s Rehabilitation University
          Deshmuki, Hyderabad - 500099
        </p>
      </section>
    </section>
  );
}
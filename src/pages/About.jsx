import React from 'react';
import '../styles/About.css';
// import campusImage from '../assets/smru-campus.png';

// mission and vision icons
import { FaEye, FaBullseye } from 'react-icons/fa';

// core values icons
import { FaTrophy, FaHeart, FaLightbulb, FaShieldAlt } from "react-icons/fa";

// journey icons
import { FaUniversity, FaBuilding, FaBookOpen, FaChalkboardTeacher, FaFlask, FaUsers, FaGraduationCap, FaGlobe, FaPaintBrush, FaLaptopMedical } from "react-icons/fa";

const About = () => {

    const journeyData = [
        {
            year: "1996",
            title: "Engineering Foundation – Hyderabad",
            description: "St. Mary’s College of Engineering & Technology opens at Deshmukhi, launching the St. Mary’s legacy.",
            icon: <FaBuilding />,
            side: "left"
        },
        {
            year: "1998",
            title: "Management Studies Begin",
            description: "St. Mary’s P.G. College (MBA) starts, adding business education.",
            icon: <FaBookOpen />,
            side: "right"
        },
        {
            year: "1999",
            title: "Technology P.G. Expansion",
            description: "MCA programme established, strengthening IT studies.",
            icon: <FaLaptopMedical />,
            side: "left"
        },
        {
            year: "2006",
            title: "Teacher-Education Entry",
            description: "B.Ed. colleges open in Hyderabad and Podili (Prakasam).",
            icon: <FaChalkboardTeacher />,
            side: "right"
        },
        {
            year: "2007",
            title: "Twin Growth Spurts",
            description: "Hyderabad Pharmacy College added; in Guntur, Engineering, P.G. Centre & Pharmacy colleges launch at Chebrolu.",
            icon: <FaFlask />,
            side: "left"
        },
        {
            year: "2008",
            title: "Inclusive & Regional Reach",
            description: "Women’s Engineering College (Budampadu, Guntur); PGDM colleges in Hyderabad; MBA & MCA colleges at Podili (Prakasam).",
            icon: <FaUsers />,
            side: "right"
        },
        {
            year: "2009",
            title: "Integrated & Tech Leap",
            description: "Integrated Campus Hyderabad (School of Engineering & MBA) and CE&T Patancheru start; Sree Harsha Technologies training centre opens.",
            icon: <FaGraduationCap />,
            side: "left"
        },
        {
            year: "2011",
            title: "Pan-India Presence – Kolkata",
            description: "St. Mary’s Technical Campus Kolkata launches with Engineering, Management & MCA schools.",
            icon: <FaGlobe />,
            side: "right"
        },
        {
            year: "2020",
            title: "Creative & Digital Frontier",
            description: "Visual Arts & Design Degree College opens at Patancheru; tele-rehab and digital-health pilots roll out.",
            icon: <FaPaintBrush />,
            side: "left"
        },
        {
            year: "2025",
            title: "SMRU Chartered",
            description: "St. Mary’s Rehabilitation University officially chartered as India’s first private university dedicated to rehabilitation sciences.",
            icon: <FaUniversity />,
            side: "right"
        }
    ];

    // Leadership team data
    const leaders = [
        {
            name: "Dr. K.V.K. Rao",
            title: "Founder, Chairman & Chancellor",
            description: "Visionary educationist and founder with a mission to empower youth through rehabilitation science.",
            image: "/founder.png" // Replace with actual image path
        },
        {
            name: "Smt.K.V.N.V Bharathi.",
            title: "Co-Founder & Pro-Chancellor",
            description: "Driving force behind SMRU’s student-first initiatives and inclusive education.",
            image: "/Bharathi.jpg" // Replace with actual image path
        },
        {
            name: "Mr.K.Sri Harsha.",
            title: "Secretary & CEO",
            description: "Strategic leader managing institutional growth, digital transformation, and academic outreach.",
            image: "/harsha.jpg" // Replace with actual image path
        },
        {
            name: "Smt.K.Indu Aparna.",
            title: "Joint Secretary & COO",
            description: "Committed to operational excellence and stakeholder coordination across departments.",
            image: "/Indu.jpg" // Replace with actual image path
        }
    ];

    return (
        <>
            {/* About us section banner */}
            <section className="about-banner">
                <div className="about-banner-content">
                    <h1>About SMRU</h1>
                    <p>
                        SMRU empowers healthcare professionals to transform lives through<br className="hide-on-mobile" />
                        world-class rehabilitation education, innovative research, and compassionate care.
                    </p>
                </div>
            </section>

            {/* Who we are section content */}
            <section className="who-we-are-section">
                <div className="who-we-are-content">
                    <div className="who-text">
                        <h2>Who We Are</h2>
                        <p>
                            <strong>St. Mary’s Rehabilitation University (SMRU)</strong> is India’s pioneering private university devoted exclusively to rehabilitation sciences and inclusive healthcare. Drawing on the three-decade legacy of the <em>Joseph Sriharsha & Mary Indraja Educational Society</em>, which began with an engineering college in Hyderabad in 1996, the St. Mary’s network now spans campuses in Hyderabad, Guntur, Prakasam, Patancheru and Kolkata.
                        </p>
                        <p>
                            Our student-centred programmes — Physiotherapy, Occupational Therapy, Clinical Psychology, Speech-Language Therapy and Rehabilitation Nursing — blend rigorous clinical training, cutting-edge research and a culture of empathy. Learners gain hands-on experience in state-of-the-art labs and partner hospitals while engaging in community outreach that prioritises underserved populations.
                        </p>
                        <p>
                            Guided by distinguished faculty and strong hospital-industry collaborations, SMRU sets new benchmarks in rehabilitation education. We empower the next generation of healthcare professionals to restore mobility, independence and quality of life, transforming lives across India and beyond.
                        </p>
                    </div>
                    <div className="who-image">
                        <img src="/herosection.jpg" alt="SMRU Campus" /> {/* Replace with a relevant image */}
                    </div>
                </div>
            </section>

            {/* Our Vision and Mission Section */}
            <section className="vision-mission-section">
                <div className="card vision-card">
                    <div className="icon-wrapper blue">
                        <FaEye size={30} />
                    </div>
                    <h3>Our Vision</h3>
                    <p>
                        To be recognized as a national leader in evidence-based rehabilitative education,
                        fostering innovation in healthcare delivery and creating compassionate professionals
                        who transform lives through healing and restoration.
                    </p>
                </div>
                <div className="card mission-card">
                    <div className="icon-wrapper green">
                        <FaBullseye size={30} />
                    </div>
                    <h3>Our Mission</h3>
                    <p>
                        To empower students with comprehensive knowledge, practical skills, and ethical values
                        necessary to excel in rehabilitation sciences, while advancing research and community
                        service to improve healthcare accessibility and quality.
                    </p>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="core-values-section">
                <div className="core-values-header">
                    <h2>Our Core Values</h2>
                    <p>
                        The principles that guide our commitment to excellence in rehabilitation
                        education and patient care.
                    </p>
                </div>
                <div className="core-values-grid">
                    <div className="core-card">
                        <div className="icon-container">
                            <FaTrophy className="icon" />
                        </div>
                        <h3>Excellence</h3>
                        <p>
                            Commitment to the highest standards in education, research,
                            and patient care.
                        </p>
                    </div>
                    <div className="core-card">
                        <div className="icon-container">
                            <FaHeart className="icon" />
                        </div>
                        <h3>Compassion</h3>
                        <p>
                            Fostering empathy and understanding in all our interactions and treatments.
                        </p>
                    </div>
                    <div className="core-card">
                        <div className="icon-container">
                            <FaLightbulb className="icon" />
                        </div>
                        <h3>Innovation</h3>
                        <p>
                            Embracing new technologies and methodologies to advance rehabilitation science.
                        </p>
                    </div>
                    <div className="core-card">
                        <div className="icon-container">
                            <FaShieldAlt className="icon" />
                        </div>
                        <h3>Integrity</h3>
                        <p>
                            Maintaining ethical standards and transparency in all our endeavors.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Journey Section */}
            <section className="journey-section">
                <div className="journey-header">
                    <h2>Our Journey</h2>
                    <p>
                        From a single engineering college to becoming a leading rehabilitation university –
                        our story of growth and impact.
                    </p>
                </div>
                <div className="timeline-container">
                    {journeyData.map((event, index) => (
                        <div className={`timeline-item ${event.side}`} key={index}>
                            <div className="content-card">
                                <div className="year-badge">
                                    <div className="icon">{event.icon}</div>
                                    <span>{event.year}</span>
                                </div>
                                <h3>{event.title}</h3>
                                <p>{event.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Our Leadership Team */}
            {/* Our Leadership Team */}
            <section className="leadership-section">
                <h2 className="leadership-title">Leadership Team</h2>
                <p className="leadership-subtitle">
                    Visionary leaders guiding SMRU towards excellence in rehabilitation education.
                </p>
                <div className="team-grid">
                    {leaders.map((leader, index) => (
                        <div className="team-card" key={index}>
                            <img src={leader.image} alt={leader.name} className="team-photo" />
                            <h3>{leader.name}</h3>
                            <span className="badge">{leader.title}</span>
                            <p>{leader.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default About;
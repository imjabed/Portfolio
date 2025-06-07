import React from "react";
import "./AboutMe.css";
import Navbar from './Navbar'

const AboutMe = () => {
  return (
    <>

        <Navbar/>
        <div className="about-container">
        <div className="about-card">
            <h1 className="about-header">MD ABU JABED</h1>

            <section className="about-section">
            <h2 className="section-title">Summary</h2>
            <p className="section-text">
                A web developer with expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js)
                and Python, with hands-on experience from industrial training and projects. Developed an
                online bookstore and an OCR-Based one click shopping platform, gaining knowledge in both
                frontend and backend development. Additionally, have basic knowledge of Cloud Computing,
                deployment using AWS and GitHub. I am a quick learner, a reliable team player, and highly
                adaptable with a passion for growing by mastering new technologies.
            </p>
            </section>

            <section className="about-section">
            <h2 className="section-title">Education and Training</h2>
            <ul className="section-list">
                <li><strong>2022-2025:</strong> Bachelor of Computer Application, Gitaram Institute of Management</li>
                <li><strong>2022:</strong> Higher Secondary [Science], Salar E.Z. Higher Secondary School (WBCHSE)</li>
                <li><strong>2020:</strong> Secondary Education [Science], Kharera A.N.H.M High School (WBBSE)</li>
                <li>1-Month Industrial Training on MERN Stack – Developed Online Bookstore E-Commerce Platform</li>
                <li>3-Months Internship & Training on MERN Stack & AWS from Ardent Computech – Built OCR Based One-Click Shopping Platform</li>
                <li><strong>CGPA:</strong> Over 9+</li>
            </ul>
            </section>

            <section className="about-section">
            <h2 className="section-title">Skills</h2>
            <div className="skills-grid">
                <div>
                <h3 className="skill-subtitle">Technical Skills</h3>
                <ul className="section-list">
                    <li>MERN Stack Development</li>
                    <li>JavaScript (ES6+), OOP</li>
                    <li>Python Programming</li>
                    <li>Version Control - Git & GitHub</li>
                    <li>REST API Development & Integration</li>
                </ul>
                </div>
                <div>
                <h3 className="skill-subtitle">Soft Skills</h3>
                <ul className="section-list">
                    <li>Strong Communication (Written & Verbal)</li>
                    <li>Team Collaboration</li>
                    <li>Project Management</li>
                    <li>Problem Solving & Creativity</li>
                    <li>Documentation & Artwork Designing</li>
                </ul>
                </div>
            </div>
            </section>

            <section className="about-section">
            <h2 className="section-title">Activities and Honors</h2>
            <ul className="section-list">
                <li>Self-taught in Music Production (FL Studio)</li>
                <li>Drawing and Multimedia Editing (PPT, Video, Image)</li>
                <li>Proficient in AI Tools Usage (Prompt Writing & Solution Finding)</li>
            </ul>
            </section>

            <section className="about-section">
            <h2 className="section-title">Languages</h2>
            <ul className="section-list">
                <li>Bengali – First Language</li>
                <li>English – Intermediate</li>
                <li>Hindi – Upper Intermediate</li>
            </ul>
            </section>

            <section className="about-contact">
            <h2 className="section-title">Contact</h2>
            <p>📞 +91 7319582773</p>
            <p>📧 contactabujabed@gmail.com</p>
            <p>📍 Kuluri Road, Salar, Murshidabad 742401</p>
            <p>
                🌐 <a href="https://www.imabujabed.vercel.app" target="_blank" rel="noreferrer">www.imabujabed.vercel.app</a>
            </p>
            </section>
        </div>
        </div>
    </>
  );
};

export default AboutMe;

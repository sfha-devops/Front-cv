import React from 'react';
import './mainCv.css'

function MainCv() {
    return (
        <div className="main-container">
            <div className="experience-professionnelle">
                <h3>EXPÉRIENCE PROFESSIONNELLE</h3>
                <p>
                    Project of the Internship : GM-Soft company 2023 <br />
                    Development of the GeoPark Mgoun Website : <br />
                    • Front-End of the client pages. <br />
                    • Front-End of the admin part of the site.
                </p>
            </div>
            <div className="certifications">
                <h3>CERTIFICATIONS</h3>
                <ul>
                    <li>AWS Cloud Practitioner - Coursera</li>
                    <li>
                        DataCamp certifications:
                        <ul>
                            <li>Data Analyst Professional 2023 - 2025</li>
                            <li>Data Analyst Associate 2023 - 2025</li>
                            <li>Data Scientist Associate 2023 - 2025</li>
                            <li>Data Engineer Associate</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div className="formations-and-projects">
                <h3>FORMATIONS AND PROJECTS</h3>
                <p>
                    <span>Cloud Resume Challenge:</span> <br />
                    The objective is to present my CV on a web
                    application hosted on AWS cloud architecture.
                    <br />
                    <span>Preparing for the AWS Certified DevOps</span>
                    Engineer - Professional certification on the
                    Cloud Guru platform.
                </p>
            </div>
            <div className="education-history">
                <h3>EDUCATION HISTORY</h3>
                <ul>
                    <li>
                        <p>École Mohammadia d'Ingénieurs : 2023-2025</p>
                    </li>
                    <li>
                        <p>Classes Préparatoires : 2021-2023</p>
                    </li>
                    <li>
                        <p>Baccalauréat science math : 2020-2021</p>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default MainCv;

import React from 'react';
import './sideBar.css';

const SideBar = () => {


    return (
        <div className="sidebar-container">
            <div>
                <div className="sidebar-header">
                    <div className="image">
                        <img src={"/assets/images/profile.png"} alt={"profile image"} />
                    </div>
                </div>

                <div className="sidebar-content">
                    <div className="profile-infos">
                        <div className="name">Abdelmajid HAMDAOUY</div>
                        <div className="job-title">DEVOPS & DATA ENGINEER</div>
                        <div className="contact">
                          <span className="location">
                            <i className="bi bi-geo-alt"></i> Rabat, Agdal
                          </span>
                        <span className="email">
                            <i className="bi bi-envelope-open"></i>
                            abd.hou.2015@gmail.com
                        </span>
                        <span className="phone">
                            <i className="bi bi-telephone"></i> +212623017881
                        </span>
                        <span className="phone">
                            <i className="bi bi-linkedin"></i> Abdelmajid HAMDAOUY
                        </span>
                        </div>
                    </div>
                    <div className="block">
                        <div className="block-name">profile</div>
                        <hr />
                        <div className="block-text">
                            <p>As an engineering student, I am deeply passionate about learning <b>DevOps</b> methodologies, particularly focusing on cloud automation, <b>CI/CD</b>. I am actively pursuing hands-on experience in setting up cloud infrastructure to learn deploying web solutions and analyzing data effectively.</p>                        </div>
                    </div>
                    <div className="block">
                        <div className="block-name">skills</div>
                        <hr />
                        <div className="block-text">
                            <ul>
                                <li>Back-end : <b>Spring</b></li>
                                <li>Front-end : <b>React</b></li>
                                <li>NoSQL : <b>Cassandra</b></li>
                                <li>Creating RESTful api</li>
                                <li>Security : <b>OAuth2</b> </li>
                                <li>AWS : <b>EC2, S3</b></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;

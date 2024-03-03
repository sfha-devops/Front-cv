import React, { useState, useEffect } from 'react';
import './sideBar.css';
import { getBackground, getPerson, getSkills } from "../../../services/InfoService";
import { Background } from "../../../Interfaces/Background";
import { Person } from "../../../Interfaces/Person";

interface SideBarProps {
    name: string; // Specify the type of the name prop
}

const SideBar: React.FC<SideBarProps> = ({ name }) => {
    let emptyPerson: Person = {
        name: "Null",
        job: "Null",
        location: "Null",
        email: "Null",
        number: "Null",
        linkdin: "Null"
    };
    const [person, setPerson] = useState(emptyPerson);
    let back: Background[] = [];
    const [background, setBackground] = useState(back);
    let skill: string[] = [];
    const [skills, setSkills] = useState(skill);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const personData = await getPerson(name);
                setPerson(personData);

                const backgroundData = await getBackground(name);
                setBackground(backgroundData);

                const skillsData = await getSkills(name);
                setSkills(skillsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [name]); // Add name to the dependency array

    return (
        <div className="sidebar-container">
            <div>
                <div className="sidebar-header">
                    <div className="image">
                        <img src="../../../assets/images/Soul.png" alt={"Profile of " + name} />
                    </div>
                </div>

                <div className="sidebar-content">
                    <div className="profile-infos">
                        <div className="name">{person.name}</div>
                        <div className="job-title">{person.job}</div>
                        <div className="contact">
                            <span className="location">
                                <i className="bi bi-geo-alt"></i> {person.location}
                            </span>
                            <span className="email">
                                <i className="bi bi-envelope-open"></i>
                                {person.email}
                            </span>
                            <span className="phone">
                                <i className="bi bi-telephone"></i> {person.number}
                            </span>
                            <span className="phone">
                                <i className="bi bi-linkedin"></i> {person.linkdin}
                            </span>
                        </div>
                    </div>

                    <div className="education-history">
                        <div className="block-name">EDUCATION HISTORY</div>
                        <hr />
                        <ul>
                            {background.map((back, index) => (
                                <div key={index}>
                                    <li className="back-title-style">
                                        {back.element}
                                    </li>
                                    <div className="back-description-style">
                                        {back.description}
                                    </div>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className="block">
                        <div className="block-name">skills</div>
                        <hr />
                        <div className="block-text">
                            <ul>
                                {skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;

import React, { useState, useEffect } from 'react';
import './mainCv.css'
import { getCertifs, getProfExperience, getProfile, getProjects } from "../../../services/InfoService";

interface SideBarProps {
    name: string; // Specify the type of the name prop
}

const MainCv: React.FC<SideBarProps> = ({ name }) => {
    const [profile, setProfile] = useState<string>('');
    const [profExperience, setProfExperience] = useState<{ title: string, elements: string[] }[]>([]);
    const [certifs, setCertifs] = useState<{ title: string, elements: string[] }[]>([]);
    const [projects, setProjects] = useState<{ title: string, description: string }[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const profileData = await getProfile(name);
                setProfile(profileData);

                const profExperienceData = await getProfExperience(name);
                setProfExperience(profExperienceData);

                const certifsData = await getCertifs(name);
                setCertifs(certifsData);

                const projectsData = await getProjects(name);
                setProjects(projectsData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="main-container">
            <div className="education-history">
                <h3>PROFILE</h3>
                <p className="profile-style">
                    {profile}
                </p>
            </div>
            <div className="experience-professionnelle">
                <h3>PROFESSIONAL EXPERIENCE</h3>
                <ul>
                    {profExperience.map((obj, index) => (
                        <div key={index}>
                            <li className="prof-expe-style">
                                {obj.title}
                            </li>
                            <ul>
                                {obj.elements.map((element, index) => (
                                    <li key={index} className="prof-expe-detail-style">
                                        {element}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="certifications">
                <h3>CERTIFICATIONS</h3>
                <ul>
                    {certifs.map((cert, index) => (
                        <div key={index}>
                            <li className="prof-expe-style">
                                {cert.title}
                            </li>
                            <ul>
                                {cert.elements.map((part, index) => (
                                    <li key={index}>
                                        {part}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </ul>
            </div>
            <div className="formations-and-projects">
                <h3>PROJECTS</h3>
                {projects.map((proj, index) => (
                    <div key={index} className="project-style">
                        <ul>
                            <li className="title"> {proj.title} </li>
                        </ul>
                        <div className="description">
                            {proj.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MainCv;

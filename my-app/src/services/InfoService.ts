import {Person} from "../Interfaces/Person";
import {Background} from "../Interfaces/Background";
import {ProfExperience} from "../Interfaces/ProfExperience";
import {Project} from "../Interfaces/Project";


// Define a function to fetch data from the backend API
const backendUrl = "http://localhost:8080";

export const getPerson = async (name: string) : Promise<Person> => {
    let abdelmajid: Person = {
        name: "Null",
        job: "Null",
        location: "Null",
        email: "Null",
        number: "Null",
        linkdin: "Null"
    }
    try {
        const response = await fetch(`${backendUrl}/api/v1/data/person/${name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return abdelmajid;
    }
}

export const getBackground = async (name: string): Promise<Background[]> => {
    try {
        const response = await fetch(`${backendUrl}/api/v1/data/background/${name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export const getSkills = async (name: string): Promise<string[]> => {
    try {
        const response = await fetch(`${backendUrl}/api/v1/data/skills/${name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export const getProfExperience = async (name: string): Promise<ProfExperience[]> => {
    try {
        const response = await fetch(`${backendUrl}/api/v1/data/prof-experience/${name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export const getCertifs = async (name: string): Promise<ProfExperience[]> => {
    try {
        const response = await fetch(`${backendUrl}/api/v1/data/certifs/${name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export const getProjects = async (name: string): Promise<Project[]> => {
    try {
        const response = await fetch(`${backendUrl}/api/v1/data/projects/${name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}

export const getProfile = async (name: string): Promise<string> => {
    try {
        const response = await fetch(`${backendUrl}/api/v1/data/profile/${name}`);
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.text();
    } catch (error) {
        console.error('Error fetching data:', error);
        return '';
    }
}

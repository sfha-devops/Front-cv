import React from 'react';
import './App.css';
import Cv from "./components/cv/cv";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import { useParams } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/:name" element={<Child />} />
                </Routes>
            </BrowserRouter>

        </div>
    );
}

function Child() {
    const { name } = useParams(); // Extract the name parameter from the URL
    const formattedName = name ? name : "Abdelmajid"; // Providing a default value "Soul" if name is undefined
    return (
        <div>
            <Cv name={formattedName} />
        </div>
    );
}

export default App;

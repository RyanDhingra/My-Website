import React, { useState } from 'react';
import './MobileApp.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.jsx';
import Terminal from './components/Terminal/Terminal.jsx';
import FileExplorer from './components/FileExplorer/FileExplorer.jsx';

function MobileApp() {
    const [mode, setMode] = useState('init');

    return (
        <div className='mobile-app'>
            <Router>
                <Routes>
                    <Route path="/" element={<Landing mode={mode} setMode={setMode} />} />
                    <Route path="/dev" element={<Terminal />} />
                    <Route path="/bio" element={<FileExplorer />} />
                </Routes>
            </Router>
        </div>
    );
}

export default MobileApp;
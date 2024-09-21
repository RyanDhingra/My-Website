import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import './App.css'
import Terminal from './components/Terminal/Terminal.jsx'
import FileExplorer from './components/FileExplorer/FileExplorer.jsx'

function App() {
  const [mode, setMode] = useState('init');

  return (
    <div className='app' >
      <Router>
        <Routes>
          <Route path="/" element={<Home mode={mode} setMode={setMode} />} />
          <Route path="/dev" element={<Terminal />} />
          <Route path="/bio" element={<FileExplorer />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

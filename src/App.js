import React from "react"
import Navbar from "./components/Navbar"
import Homepage from "./components/Homepage"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Helmet } from "react-helmet"


const App = () => {
    return (
      <Router>
        <div className="App">
          <Helmet>
            <meta charSet="utf-8" />
            <title>Ryan Dhingra's PW</title>
            <link rel="canonical" href="http://mysite.com/example" />
            <meta name="description" content="Ryan Dhingra's personal website." />
          </Helmet>
          <Navbar/>
          <div className="Page">
            <Routes>
            <Route exact path="/MyWebsite" element={<Homepage/>}/>
              <Route exact path="/home" element={<Homepage/>}/>
              <Route exact path="/about" element={<About/>}/>
              <Route exact path="/contact_info" element={<Contact/>}/>
              <Route exact path="/projects" element={<Projects/>}/>
              <Route exact path="/" element={<Homepage/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    );
}

export default App;

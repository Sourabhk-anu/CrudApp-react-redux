import React from 'react'
import './app.css'
import Navbar from './components/Navbar'
import Create from './components/Create'
import Read from './components/Read'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Create />} />
                <Route exact path="/read" element={<Read />} />
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
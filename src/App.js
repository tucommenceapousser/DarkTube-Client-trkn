// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Trkn from './pages/Trkn'; // Importez le nouveau composant Trkn

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<List />} />
        <Route path="/trkn" element={<Trkn />} /> {/* Ajoutez la nouvelle route */}
      </Routes>
    </Router>
  );
}

export default App;
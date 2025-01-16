import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import MarkdownArticle from './components/MarkdownArticle';
import Menu from './components/Menu';
import Homepage from './components/Homepage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Alba Software</h1>
        </header>
        <div className="main-content">
          <Menu />
          <main>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/article/:articleId" element={<MarkdownArticle />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;

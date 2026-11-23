import React from 'react';
import Quiz from './Quiz';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="app-title">Тест мировоззрения</h1>
        <p className="app-subtitle">Узнайте, какие убеждения вам ближе</p>
      </header>
      <Quiz />
    </div>
  );
}

export default App;

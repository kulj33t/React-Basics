import React, { useState } from 'react';
import './App.css';

const ToggleView = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div className={`toggle-view ${isExpanded ? 'expanded' : ''}`}>
      <h2>{isExpanded ? 'Details View' : 'Simple View'}</h2>

      {isExpanded && (
        <div>
          <p>Here are some more details about the item.</p>
          <p>Maybe more text or even images...</p>
        </div>
      )}

      <button onClick={toggleView}>
        {isExpanded ? 'Hide Details' : 'Show Details'}
      </button>
    </div>
  );
};

function App() {
  return (
    <div className="app-container">
      <div className="content">
        <ToggleView />
      </div>
    </div>
  );
}

export default App;

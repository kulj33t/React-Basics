import React, { useState } from 'react';

const ToggleView = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleView = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <div
      style={{
        transition: 'all 0.3s ease',
        padding: '20px',
        border: '1px solid #ccc',
        width: isExpanded ? '400px' : '200px',
        height: isExpanded ? '300px' : '100px',
        overflow: 'hidden',
        margin: '50px auto',
        textAlign: 'center',
      }}
    >
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
    <div>
      <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
        My Toggle View Component
      </h1>
      <ToggleView />
    </div>
  );
}

export default App;

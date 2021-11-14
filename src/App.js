import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className='App'>
      <header className='App-header'>
        <p>{count}</p>
        <div>
          <button className='btn' onClick={() => setCount(count + 1)}>
            increase
          </button>
          <button
            className='btn'
            onClick={() => {
              if (count !== 0) {
                setCount(count - 1);
              }
            }}
          >
            decrease
          </button>
          <button className='btn' onClick={() => setCount(0)}>
            reset
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './App.css';
import BackgroundChanger from './components/BackgroundChanger';

function App() {
  const [containerColor, setContainerColor] = useState('white');

  const handleColorChange = (color) => {
    setContainerColor(color);
  };

  return (
    <div className='container' style={{ backgroundColor: containerColor }}>
      <BackgroundChanger onColorChange={handleColorChange} />
    </div>
  );
}

export default App;
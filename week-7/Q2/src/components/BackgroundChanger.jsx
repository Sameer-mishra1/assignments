import React from 'react';
import ColorButton from './ColorButton';
import './BackgroundChanger.css';

function BackgroundChanger({ onColorChange }) {
    const handleChangeColor = (color) => {
    onColorChange(color);
};

    return (
    <div className="BackgroundChanger">
    <ColorButton color="aqua" text="Aqua" onClick={handleChangeColor} />
    <ColorButton color="pink" text="Pink" onClick={handleChangeColor} />
    <ColorButton color="yellow" text="Yellow" onClick={handleChangeColor} />
    <ColorButton color="antiquewhite" text="Antiquewhite" onClick={handleChangeColor} />
    <ColorButton color="violet" text="Violet" onClick={handleChangeColor} />
    </div>
);
}

export default BackgroundChanger;
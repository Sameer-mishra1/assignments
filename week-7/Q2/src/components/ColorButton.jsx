import './ColorButton.css';

function ColorButton({ color, text, onClick }) {

    const handleClick = () => {
    onClick(color);
};

    return (
    <div className="btn" style={{ backgroundColor: color }} onClick={handleClick}>
    {text}
    </div>
);
}

export default ColorButton;

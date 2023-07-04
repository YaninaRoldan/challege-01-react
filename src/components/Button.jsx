import React, { useState } from 'react';

const Button = () => {
    const [rate, setRate] = useState(0);
    const handleButtonClick = () => {
        setRate(rate + 1);
    };
    return (
        <div className="btns-rate">
            <button className="rate" onClick={handleButtonClick}>1</button>
            <button className="rate" onClick={handleButtonClick}>2</button>
            <button className="rate" onClick={handleButtonClick}>3</button>
            <button className="rate" onClick={handleButtonClick}>4</button>
            <button className="rate" onClick={handleButtonClick}>5</button>
        </div>
    )

};


export default Button;
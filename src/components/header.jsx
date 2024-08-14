import React, { useState } from 'react';
import './Header.scss'; // Убедитесь, что у вас есть этот файл для стилей

const Header = () => {
  const [activeButton, setActiveButton] = useState(null);

  const handleButtonClick = (index) => {
    setActiveButton(index);
  };

  return (
    <header className="header">
      {['Button 1', 'Button 2', 'Button 3', 'Button 4'].map((label, index) => (
        <button
          key={index}
          className={activeButton === index ? 'button active' : 'button'}
          onClick={() => handleButtonClick(index)}
        >
          {label}
        </button>
      ))}
    </header>
  );
};

export default Header;

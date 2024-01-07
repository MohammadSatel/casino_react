import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Roulette.module.css';

const Roulette: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [isSpinning, setIsSpinning] = useState<boolean>(false);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  useEffect(() => {
    if (isSpinning) {
      const timeout = setTimeout(() => {
        setIsSpinning(false);
        const winningNumber = Math.floor(Math.random() * 37);
        alert(`The winning number is ${winningNumber}`);
        setSelectedNumber(null);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [isSpinning]);

  const handleNumberSelection = (number: number) => {
    if (!isSpinning) {
      setSelectedNumber(number);
    }
  };

  const handleSpin = () => {
    if (!isSpinning && selectedNumber !== null) {
      setIsSpinning(true);
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div className={`container ${styles.container} ${isDarkTheme ? styles.darkTheme : ''}`}>
      <h2>Roulette Game</h2>
      <div className={`${styles.wheelContainer} ${isDarkTheme ? styles.darkTheme : ''}`}>
        <div
          className={`roulette-wheel ${styles['roulette-wheel']} ${
            isSpinning ? styles.spinning : ''
          }`}
        />
        <div className={styles.numberOverlay}>
          {/* No additional numbers here */}
        </div>
      </div>
      <button className="btn btn-primary" onClick={handleSpin} disabled={isSpinning}>
        {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
      <button className="btn btn-secondary btn-theme-toggle" onClick={toggleTheme}>
        {isDarkTheme ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      </button>
    </div>
  );
};

export default Roulette;
import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Roulette.module.css';

const Roulette: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const rotationAngle = useRef(0); // Set the initial rotation of the wheel to 0
  const spinDuration = useRef(0);
  const [winningNumber, setWinningNumber] = useState<number | null>(null);
  const [isFirstSpin, setIsFirstSpin] = useState(true);

  const handleSpin = () => {
    setIsSpinning(true);
    const additionalRotation = Math.random() * 1080 + 1080;
    rotationAngle.current += additionalRotation;
    spinDuration.current = Math.random() * 4000 + 3000;
    if (isFirstSpin) {
      setIsFirstSpin(false);
    }

    setTimeout(() => {
      setIsSpinning(false);
    }, spinDuration.current);
  };

  useEffect(() => {
    if (!isSpinning) {
      const numberOfSegments = 37;
      const anglePerSegment = 360 / numberOfSegments;
      const adjustedAngle = ((rotationAngle.current + anglePerSegment / 2) % 360);
      const winningSegment = Math.floor(adjustedAngle / anglePerSegment);
      const numberSequence = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26];
      setWinningNumber(numberSequence[(numberOfSegments - winningSegment) % numberOfSegments]);
    }
  }, [isSpinning]);

  return (
    <div className={`container ${styles.container}`}>
      <h2>Roulette Game</h2>
      <div className={styles.wheelContainer}>
        <div
          className={`roulette-wheel ${styles['roulette-wheel']} ${
            isSpinning ? styles.spinning : ''
          }`}
          style={{
            backgroundImage: `url(/roulette-wheel.png)`,
            width: '400px',
            height: '400px',
            transform: `rotate(${rotationAngle.current}deg)`,
            transition: isSpinning ? `transform ${spinDuration.current / 1000}s ease-out` : 'none'
          }}
        ></div>
        <button className={styles.button} onClick={handleSpin}>Spin</button>
      </div>
      {winningNumber !== null && <p>The winning number is {winningNumber}</p>}
    </div>
  );
};

export default Roulette;
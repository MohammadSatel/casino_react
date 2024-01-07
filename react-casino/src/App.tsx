import React from 'react';
import Roulette from './components/Roulette';

const App: React.FC = () => {
  return (
    <div>
      <h1>React Casino</h1>
      <Roulette />
      {/* Add other game components as needed */}
    </div>
  );
};

export default App;
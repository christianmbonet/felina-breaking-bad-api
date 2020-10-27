import React from 'react';
import GameStatusBar from './GameStatusBar';
import GameChoices from './GameChoices';
import './FullGame.css';

function FullGame() {
  return (
    <div className="full-game">
      <GameChoices />
    </div>
  );
}

export default FullGame;

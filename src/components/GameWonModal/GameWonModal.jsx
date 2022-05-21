import React from 'react';

import Button from 'components/Button';
import '../../styles/gameWonModal.scss';

const GameWonModal = ({
  closeModal,
  isPlayerWon,
  gameMode,
  playAgain,
  hintsTaken,
}) => {
  return (
    <div className='gameDetails-wrapper'>
      <div className='modal-container'>
        <div className='modal-close-btn-container'>
          <button onClick={closeModal}>X</button>
        </div>
        <div className='modal-title'>{isPlayerWon && <h2>You Won !</h2>}</div>
        <div className='modal-body'>
          <p>Game Level: {gameMode}</p>
          <p>You used: {hintsTaken} hints.</p>
        </div>
        <div className='modal-footer'>
          <Button
            onClick={playAgain}
            buttonStyle='btn--primary'
            text='Play again'
          />
        </div>
      </div>
    </div>
  );
};

export default GameWonModal;

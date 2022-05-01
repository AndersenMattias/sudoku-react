import React from 'react';

const GameLvlButtons = ({ onHandleChoosenLvl, gameStarted }) => {
  return (
    <div className='gamelvl-buttonsWrapper'>
      {!gameStarted && (
        <div>
          <div>
            <button
              className='btn beginnerBtn'
              onClick={() => {
                onHandleChoosenLvl('beginner', 1);
              }}
            >
              Beginner
            </button>
          </div>
          <div>
            <button
              className='btn intermediateBtn'
              onClick={() => {
                onHandleChoosenLvl('intermediate', 2);
              }}
            >
              Intermediate
            </button>
          </div>
          <div>
            <button
              className='btn masterBtn'
              onClick={() => {
                onHandleChoosenLvl('master', 3);
              }}
            >
              Soduku Master
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameLvlButtons;

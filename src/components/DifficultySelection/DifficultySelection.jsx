import Button from 'components/Button';
import React from 'react';

const DifficultySelection = ({ onHandleChoosenLvl, gameStarted }) => {
  return (
    <div>
      {!gameStarted && (
        <div className='difficulty-selectWrapper'>
          <div>
            <Button
              buttonStyle='btn--success'
              onClick={() => {
                onHandleChoosenLvl('beginner', 1);
              }}
              text='Beginner'
            />
          </div>
          <div>
            <Button
              buttonStyle='btn--warning'
              onClick={() => {
                onHandleChoosenLvl('intermediate', 2);
              }}
              text='Intermediate'
            />
          </div>
          <div>
            <Button
              buttonStyle='btn--dark'
              onClick={() => {
                onHandleChoosenLvl('master', 3);
              }}
              text='Soduku Master'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DifficultySelection;

import React from 'react';

import '../../styles/difficultyModal.scss';

import Button from '../Button/Button.jsx';

const DifficultyModal = ({ closeModal, onHandleChoosenLvl, gameStarted }) => {
  return (
    <div className='difficultyModal-wrapper'>
      {!gameStarted && (
        <div className='modal-container'>
          <div className='modal-close-btn-container'>
            <button onClick={closeModal}>X</button>
          </div>
          <div className='modal-title'>
            <h1>Difficulty Mode</h1>
          </div>
          <div className='difficulty-modal-body'>
            <div className='difficulty-selection-container'>
              <div className='difficulty'>
                <Button
                  buttonStyle='btn--success'
                  onClick={() => {
                    onHandleChoosenLvl('easy', 1);
                  }}
                  text='Easy'
                />
              </div>

              <div className='difficulty'>
                <Button
                  buttonStyle='btn--warning'
                  onClick={() => {
                    onHandleChoosenLvl('medium', 2);
                  }}
                  text='Medium'
                />
              </div>

              <div className='difficulty'>
                <Button
                  buttonStyle='btn--danger'
                  onClick={() => {
                    onHandleChoosenLvl('hard', 3);
                  }}
                  text='Hard'
                />
              </div>
            </div>
          </div>
          <div className='modal-footer'>
            <Button
              onClick={closeModal}
              buttonStyle='btn--primary'
              text='Back'
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DifficultyModal;

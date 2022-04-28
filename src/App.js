import { useState } from 'react';
import './App.css';
import Sudoku from './components/Sudoku/Sudoku';



function App() {
  const [newGame, setNewGame] = useState(false)
  const [toggleBtn, setToggleBtn] = useState(true)

  function toggleGame() {
    setNewGame(!newGame)
    setToggleBtn(!toggleBtn)
  }

  const NewGameBtn = () => {
    return (
      <div className='letsPlay-wrapper'>
        <div className='letsPlay-btnContainer'>
        <button type='button' className='playBtn' onClick={toggleGame}>New Game</button>
        </div>
      </div>
    )
  }
  
  return (
    <div className="site-wrapper">
      
      {toggleBtn && <NewGameBtn /> }

      {newGame && <Sudoku />}
      



    </div>
  );
}

export default App;

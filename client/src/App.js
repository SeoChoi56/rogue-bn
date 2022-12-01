import logo from './logo.svg';
import './App.css';
import Canvas from './Canvas';
import { useState } from 'react'
import GameLogic from './GameLogic'
import { TILE_SIZE } from './MapConstants';


function App() {
  const [playerCharacter, setPlayerCharacter] = useState({ 
                                                    HP: 15, 
                                                    ATK: 2, 
                                                    class: "player",
                                                  })
  

  const [playerXPosition, setPlayerXPosition] = useState(128)
  const [playerYPosition, setPlayerYPosition] = useState(128)

  function handlePlayerYChange(value) {
    console.log(value)
    setPlayerYPosition(value)
  }


  return (
    <div>
      <p>Canvas</p>
      <div className="App">
      <img id="playergrid" src="/assets/MapTiles/playergrid.png" className="template"/>
      <img id="enemygrid" src="/assets/MapTiles/enemygrid.png" className="template"/>
        <GameLogic 
          player={playerCharacter} 
          playerXPos={playerXPosition}
          playerYPos={playerYPosition}
          updatePlayerXPos={setPlayerXPosition}
          updatePlayerYPos={handlePlayerYChange}
        />
      </div>
    </div>

  );
}

export default App;

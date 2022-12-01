import Canvas from './Canvas'
import { useCallback, useEffect } from 'react'
import { TILE_SIZE } from './MapConstants';

function GameLogic({ player, playerXPos, playerYPos, updatePlayerXPos, updatePlayerYPos }) {


    //Handles the key press 
    const handleKeyPress = useCallback((event) => {
        handleKey(event);
    }, []);

    function moveUp(value) {
        return value - (TILE_SIZE)
    }
    //Handles the action with the corresponding key event 
    const handleKey = (e) => {
        // d = 68
        // w = 87
        // s = 83
        // a = 65

        switch (e.keyCode) {
            case 87:
                updatePlayerYPos(playerYPos => playerYPos - TILE_SIZE)
                break;
            case 83:
                updatePlayerYPos(playerYPos => playerYPos + TILE_SIZE)
                break;
            case 68:
                updatePlayerXPos(playerXPos => playerXPos + TILE_SIZE)
                break;
            case 65:
                updatePlayerXPos(playerXPos => playerXPos - TILE_SIZE)
                break;
        }
    }

    useEffect(() => {
        // attach the event listener
        document.addEventListener('keydown', handleKeyPress);

        // remove the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [handleKeyPress]);

    return (
        <Canvas
            className="canvas"
            player={player}
            playerXPos={playerXPos}
            playerYPos={playerYPos}
        />
    )
}

export default GameLogic 
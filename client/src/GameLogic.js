import Canvas from './Canvas'
import { useCallback, useEffect } from 'react'
import { TILE_SIZE } from './MapConstants';

function GameLogic({ player, playerXPos, playerYPos, updatePlayerXPos, updatePlayerYPos }) {

    //Handles the key press 
    const handleKeyPress = useCallback((event) => {
        handleKey(event);
    }, []);

    //Handles Player Actions 
    const handleKey = (e) => {
        // d = 68
        // w = 87
        // s = 83
        // a = 65
        // space = 32

        console.log(e.keyCode)
        //handle movement
        switch (e.keyCode) {
            case 87:
                updatePlayerYPos(playerYPos => {
                    if (playerYPos === 0) {
                        return playerYPos 
                    }else {
                        return playerYPos - TILE_SIZE
                    }})
                break;
            case 83:
                updatePlayerYPos(playerYPos => {
                    if (playerYPos === 256) {
                        return playerYPos 
                    }else {
                        return playerYPos + TILE_SIZE
                    }})
                break;
            case 68:
                updatePlayerXPos(playerXPos => {
                    if (playerXPos === 256) {
                        return playerXPos 
                    }else {
                        return playerXPos + TILE_SIZE
                    }})
                break;
            case 65:
                updatePlayerXPos(playerXPos => {
                    if (playerXPos === 0) {
                        return playerXPos 
                    }else {
                        return playerXPos - TILE_SIZE
                    }})
                break;
        }

        if (e.keyCode === 32) {
            console.log("mega attack")
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
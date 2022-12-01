import React, { useRef, useEffect, useState } from 'react'
import { MAP_DIMENSIONS, TILE_SIZE, BATTLEGRID } from './MapConstants'

const GameCanvas = ({ player, playerXPos, playerYPos }) => {

    const canvasRef = useRef(null)
    const width = MAP_DIMENSIONS.COLS * TILE_SIZE;
    const height = MAP_DIMENSIONS.ROWS * TILE_SIZE;
    //gets the image to set for background

    const playergrid = document.getElementById("playergrid");
    const enemygrid = document.getElementById("enemygrid");

    const draw = ctx => {
        //clears canvas
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        const { COLS, ROWS } = MAP_DIMENSIONS

        // Drawing grid
        //horizontal
        for (let i = 0; i < height; i++) {
            const y = i * TILE_SIZE
            ctx.strokeStyle = 'blue';
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        //vertical
        for (let j = 0; j < width; j++) {
            const x = j * TILE_SIZE
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }
        //Draw Entities
        ctx.fillText(`PlayerHP: ${player.HP}`, TILE_SIZE / 4, TILE_SIZE / 2)
        // ctx.drawImage(img, TILE_SIZE, TILE_SIZE)
        // img.onload = function() {
        //     ctx.drawImage(img, 0, TILE_SIZE*2)
        // }

        //Playergrid background
        for(let row = 0; row < ROWS; row++){
            for (let column = 0; column < COLS; column++){
                let tile = new Image(); 
                if(column < COLS/2 ){
                    tile.src = "/assets/MapTiles/playergrid.png"
                }else {
                    tile.src = "/assets/MapTiles/enemygrid.png"
                }
                const x = column * TILE_SIZE;
                const y = row * TILE_SIZE;
                tile.onload = function() {
                    ctx.drawImage(
                        tile,
                        0,
                        0,
                        TILE_SIZE,
                        TILE_SIZE,
                        x,
                        y,
                        TILE_SIZE,
                        TILE_SIZE,
                    )
                }
            }
        }

        //Drawing player
        let characterSprite = new Image();
        characterSprite.src = '/assets/CharacterModels/pixelmega.png'
        characterSprite.onload = function() {
            console.log(playerXPos)
            console.log(playerYPos)
            ctx.drawImage(
                characterSprite,
                0,
                0,
                TILE_SIZE,
                TILE_SIZE,
                playerXPos,
                playerYPos,
                TILE_SIZE,
                TILE_SIZE,
            )
        }
        ctx.fillText(`Canvas Height: ${ctx.canvas.height}`, 10, 10)
    }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        draw(context)
    }, [draw])

    //Canvas sizes 800 = height and 500 width

    return (
        <div>
            {/* <img id="playergrid" src="/assets/MapTiles/playergrid.png" className="template" />
            <img id="enemygrid" src="/assets/MapTiles/enemygrid.png" className="template" /> */}
            <canvas height={'500px'} width={'800px'} ref={canvasRef} />
        </div>

    )
}


export default GameCanvas
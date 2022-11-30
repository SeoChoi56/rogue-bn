import React, { useRef, useEffect, useState } from 'react'
import { MAP_DIMENSIONS, TILE_SIZE } from './MapConstants'

const GameCanvas = ({ props }) => {
    const canvasRef = useRef(null)
    const width = MAP_DIMENSIONS.COLS * TILE_SIZE;
    const height = MAP_DIMENSIONS.ROWS * TILE_SIZE;

    const draw = ctx => {
        //clears canvas
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        const { COLS, ROWS } = MAP_DIMENSIONS

        console.log(COLS)
        console.log(ROWS)

        // Drawing grid
        //horizontal
        for (let i = 0; i < height; i++ ) {
            const y = i * TILE_SIZE
            ctx.strokeStyle = 'blue';
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(width, y);
            ctx.stroke();
        }

        //vertical
        for (let j=0; j < width; j++) {
            const x = j * TILE_SIZE
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, height);
            ctx.stroke();
        }

        ctx.fillText(`Canvas Height: ${ctx.canvas.height}`, 10, 10)
    }

    useEffect(() => {

        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        //Our draw come here
        draw(context)
    }, [draw])

    return (
        <canvas height={'500px'} width={'800px'} ref={canvasRef} />
    )
}


export default GameCanvas
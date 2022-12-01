export const TILE_SIZE = 128

export const MAP_DIMENSIONS = {
    COLS: 6,
    ROWS: 3,
    TILE_SIZE
}

export const MAP_TILE_IMAGES = {
    0: 'assets/MapTiles/playergrid.png',
    1: 'assets/MapTiles/enemygrid.png'
}

export const BATTLEGRID = [
    [
        [0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 1],
        [0, 0, 0, 1, 1, 1]
    ]
]

export const MOVE_DIRECTIONS = {
    w: [0, -1],
    a: [-1, 0],
    s: [0, 1],
    d: [1, 0],
};
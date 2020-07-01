namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
    `
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (goodGuy, badGuy) {
    badGuy.destroy()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.over(true)
})
let enemy: Sprite = null
let player = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f e e 2 2 2 2 2 2 e f f . .
    . f f e 2 f f f f f f 2 e f f .
    . f f f f f e e e e f f f f f .
    . . f e f b f 4 4 f b f e f . .
    . . f e 4 1 f d d f 1 4 e f . .
    . . e f e 4 d d d d 4 e f . . .
    . . e 4 d d e 2 2 2 2 f e f . .
    . . . e d d e 2 2 2 2 f 4 e . .
    . . . . e e f 5 5 4 4 f . . . .
    . . . . . f f f f f f f . . . .
    . . . . . . . . . f f f . . . .
`, SpriteKind.Player)
scene.cameraFollowSprite(player)
controller.moveSprite(player)
info.setLife(3)
tiles.setTilemap(tiles.createTilemap(
            hex`10002000000001020202020202020202020300000000041010101010101010101006000000000410101010101010101010060000000004101010101010101010100600000000041010101010101010101006000000000410101010101010101010060000000004101010101010101010100600000000070c0d10101010101010100600000000070e0f101010101010101006000000000710101010101010101010060000000007101010100b0b0b0b0b0b0600000000071010101010101010101006000000000710101010101010101010060000000007101010101010101010100600000000070b0b0b0b0b101010101006000000000710101010101010101010060000000007101010101010101010100600000000071010101010101010101006000000000710100b0b0b0b0b0b0b0b06000000000710101010101010101010060000000007101010101010101010100600000000071010101010101010101006000000000710101010101010101010060000000007101010101010101010100600000000070b0b0b0b0b10101010100600000000071010101010101010101006000000000710101010101010101010060000000007101010101010101010100600000000071010101010100b0b0b0b0600000000071010101010101010101006000000000710101010101011101010060000000008090909090909090909090a0000`,
            img`
                . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 2 2 . . . . . . . . 2 . .
                . . 2 2 2 . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . 2 2 2 2 2 2 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 2 2 2 2 2 . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . 2 2 2 2 2 2 2 2 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 2 2 2 2 2 . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . 2 2 2 2 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 . . . . . . . . . . 2 . .
                . . 2 2 2 2 2 2 2 2 2 2 2 2 . .
            `,
            [myTiles.tile0,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenInnerSouthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.floorLight4,sprites.dungeon.chestClosed],
            TileScale.Sixteen
        ))
game.onUpdateInterval(30, function () {
    enemy = sprites.create(img`
        . . f f f . . . . . . . . f f f
        . f f c c . . . . . . f c b b c
        f f c c . . . . . . f c b b c .
        f c f c . . . . . . f b c c c .
        f f f c c . c c . f c b b c c .
        f f c 3 c c 3 c c f b c b b c .
        f f b 3 b c 3 b c f b c c b c .
        . c b b b b b b c b b c c c . .
        . c 1 b b b 1 b b c c c c . . .
        c b b b b b b b b b c c . . . .
        c b c b b b c b b b b f . . . .
        f b 1 f f f 1 b b b b f c . . .
        f b b b b b b b b b b f c c . .
        . f b b b b b b b b c f . . . .
        . . f b b b b b b c f . . . . .
        . . . f f f f f f f . . . . . .
    `, SpriteKind.Enemy)
    // the sprite is automatically destroyed when it moves
    // off the screen
    enemy.setFlag(SpriteFlag.AutoDestroy, true)
    // the sprite is automatically destroyed when it
    // collides with a wall tile
    enemy.setFlag(SpriteFlag.DestroyOnWall, true)
    enemy.setVelocity(-50, 0)
    tiles.placeOnRandomTile(enemy, sprites.dungeon.greenOuterEast0)
})

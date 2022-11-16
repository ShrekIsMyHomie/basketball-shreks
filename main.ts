namespace SpriteKind {
    export const hoop = SpriteKind.create()
}
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("action", 500, function () {
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 4 4 . . . . . . 
            . . . . . . 4 4 4 4 4 4 . . . . 
            . . . . . f f 4 4 4 4 4 f . . . 
            . . . . . f f f f f f f f . . . 
            . . . . 4 4 4 4 4 4 4 4 4 . . . 
            . . . . 4 4 4 4 4 4 4 4 4 . . . 
            . . . . 4 4 4 4 4 4 4 4 4 . . . 
            . . . . 4 4 f f f f f f f . . . 
            . . . . 4 f 4 4 4 4 4 4 f . . . 
            . . . . . . 4 4 4 4 4 4 . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, mySprite, 0, 79)
    })
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.hoop, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    projectile.destroy()
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundImage(img`
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111ddddd1111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111dddddddddddddddddddddd11111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddddd11111111111111111ddddddddddddddddddddddddddddddd11111111111111ddddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddddd11111111111111dddddddddddddddddddddddddddddddddddddddd111111111111ddddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddddd11111111111ddddddddddddddddddddddddddddddddddddddddddddddddd1111111ddddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddd111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111dddddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111dddddddddddddddddddddddddddddddddddddddddddd
    ddddddddddddddddddddddddddddddddddddddddddd1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd1111111111111111111ddddddddddddddddddddddddddddd1111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd1111111111111111111ddddddddddddddddddddddddddddd1111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd1111111111111111111ddddddddddddddddddddddddddddd1111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddd111111111111111111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddd
    dddddddddddddddddddddddddddddddddddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
    `)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 7 e . . . . 
    . . . . . 7 7 7 7 d 7 7 e . . . 
    . . . . e 7 7 7 7 7 7 7 e . . . 
    . . . . e 7 7 7 7 7 7 7 e . . . 
    . . . . e 7 7 7 7 7 e f f c c . 
    . . . . e e 7 7 e f f f f b c . 
    . . e e e f e 7 7 b f f f d c . 
    . e e 7 7 d f e 7 1 1 1 1 b c . 
    . e e 7 7 d f e e e c c c . . . 
    . b 1 1 e e 7 7 e e c . . . . . 
    . . f d d 7 7 7 f f f d d . . . 
    e e f d d e e e . f f d d . . . 
    e e e f f f f f . . . . . . . . 
    e e . . . . f f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    `, SpriteKind.Player)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . 7 7 7 7 7 e . . . . . . 
    . . . 7 7 7 7 d 7 7 e . . . . . 
    . . e 7 7 7 7 7 7 7 e . . . . . 
    . . e 7 7 7 7 7 7 7 e . . . . . 
    . . e 7 7 7 7 7 e f f c c . . . 
    . . e e 7 7 e f f f f b c . . . 
    . e e e f e 7 b f f f d c . . . 
    e e 7 7 d f 7 e f f f b c . . . 
    e e 7 7 d f e c b 4 4 c . . . . 
    b 1 1 d e e c 4 1 1 4 c . . . . 
    . f f e e e e 4 4 4 4 c . . . . 
    . . f f d d e 4 4 4 b c . . . . 
    . . f f d d e c c c c d . . . . 
    . . . f f f f . . . . . . . . . 
    . . f f f e e e . . . . . . . . 
    . . f f f f e e e . . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 7 e . . . . 
    . . . . . 7 7 7 7 d 7 7 e . . . 
    . . . . e 7 7 7 7 7 7 7 e . . . 
    . . . . e 7 7 7 7 7 7 7 e . . . 
    . . . . e 7 7 7 7 7 e f f c c . 
    . . . . e e 7 7 e f f f f b c . 
    . . . e e e f e e f f f f d c . 
    . . e e 7 7 d f c b 4 4 c b c . 
    . . e e 7 7 b c 4 1 1 4 c . . . 
    . . b 1 1 b e c 4 4 4 4 c . . . 
    . . f f f f d d 4 4 4 b c . . . 
    f f f f f f d d c c c c . . . . 
    f f f . f f f f c c c . . . . . 
    f f . . . . e e e . . . . . . . 
    . . . . . . e e e e . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 7 7 7 7 7 e . . . . 
    . . . . . 7 7 7 7 d 7 7 e . . . 
    . . . . e 7 7 7 7 7 7 7 e . . . 
    . . . . e 7 7 7 7 7 7 7 e . . . 
    . . . . e 7 7 7 7 7 e f f c c . 
    . . . . e e 7 7 e f f f f b c . 
    . . e e e f e e f f f f f d c . 
    . e e 7 7 d f c b 4 4 c 1 b c . 
    . e e 7 7 b c 4 1 1 4 c c . . . 
    . b 1 1 b e c 4 4 4 4 c . . . . 
    . . f f f d d 4 4 4 b c d . . . 
    e e f f f d d c c c c d d . . . 
    e e e f f f f c c c . . . . . . 
    e e . . . . f f f . . . . . . . 
    . . . . . . f f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 7 7 7 7 7 e . . . 
    . . . . . . 7 7 7 7 d 7 7 e . . 
    . . . . . e 7 7 7 7 7 7 7 e . . 
    . . . . . e 7 7 7 7 7 7 7 e . . 
    . . . . . e 7 7 7 7 7 e f f c c 
    . . . . . e e 7 7 e f f f f b c 
    . . . e e e f e 7 7 e f f f d c 
    . . e e 7 7 d f e 7 c b 4 4 c c 
    . . e e 7 7 d f e c 4 1 1 4 c . 
    . . b 1 1 d e e e c 4 4 4 4 c . 
    . . . f f f f f d d 4 4 4 b c . 
    . . . . f f f f d d c c c c . . 
    . . . . . f f f f f c c c . . . 
    . . . . e e e f f . . . . . . . 
    . . . . e e e e f f . . . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . e 7 7 7 7 7 . . . . 
    . . . . . e 7 7 d 7 7 7 7 . . . 
    . . . . . e 7 7 7 7 7 7 7 e . . 
    . . . . . e 7 7 7 7 7 7 7 e . . 
    . . . c c f f e 7 7 7 7 7 e . . 
    . . . c b f f f f e 7 7 e e . . 
    . . . c d f f f b 7 e f e e e . 
    . . . c b f f f e 7 f d 7 7 e e 
    . . . . c 4 4 b c e f d 7 7 e e 
    . . . . c 4 1 1 4 c e e d 1 1 b 
    . . . . c 4 4 4 4 e e e e f f . 
    . . . . c b 4 4 4 e d d f f . . 
    . . . . d c c c c e d d f f . . 
    . . . . . . . . . f f f f . . . 
    . . . . . . . . e e e f f f . . 
    . . . . . . . e e e f f f f . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . e 7 7 7 7 7 . . . . . . 
    . . . e 7 7 d 7 7 7 7 . . . . . 
    . . . e 7 7 7 7 7 7 7 e . . . . 
    . . . e 7 7 7 7 7 7 7 e . . . . 
    . c c f f e 7 7 7 7 7 e . . . . 
    . c b f f f f e 7 7 e e . . . . 
    . c d f f f f e e f e e e . . . 
    . c b c 4 4 b c f d 7 7 e e . . 
    . . . c 4 1 1 4 c b 7 7 e e . . 
    . . . c 4 4 4 4 c e b 1 1 b . . 
    . . . c b 4 4 4 d d f f f f . . 
    . . . . c c c c d d f f f f f f 
    . . . . . c c c f f f f . f f f 
    . . . . . . . e e e . . . . f f 
    . . . . . . e e e e . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . e 7 7 7 7 7 . . . . . . 
    . . . e 7 7 d 7 7 7 7 . . . . . 
    . . . e 7 7 7 7 7 7 7 e . . . . 
    . . . e 7 7 7 7 7 7 7 e . . . . 
    . c c f f e 7 7 7 7 7 e . . . . 
    . c b f f f f e 7 7 e e . . . . 
    . c d f f f f f e e f e e e . . 
    . c b 1 c 4 4 b c f d 7 7 e e . 
    . . . c c 4 1 1 4 c b 7 7 e e . 
    . . . . c 4 4 4 4 c e b 1 1 b . 
    . . . d c b 4 4 4 d d f f f . . 
    . . . d d c c c c d d f f f e e 
    . . . . . . c c c f f f f e e e 
    . . . . . . . f f f . . . . e e 
    . . . . . . f f f f . . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . e 7 7 7 7 7 . . . . . . . 
    . . e 7 7 d 7 7 7 7 . . . . . . 
    . . e 7 7 7 7 7 7 7 e . . . . . 
    . . e 7 7 7 7 7 7 7 e . . . . . 
    c c f f e 7 7 7 7 7 e . . . . . 
    c b f f f f e 7 7 e e . . . . . 
    c d f f f e 7 7 e f e e e . . . 
    c c 4 4 b c 7 e f d 7 7 e e . . 
    . c 4 1 1 4 c e f d 7 7 e e . . 
    . c 4 4 4 4 c e e e d 1 1 b . . 
    . c b 4 4 4 d d f f f f f . . . 
    . . c c c c d d f f f f . . . . 
    . . . c c c f f f f f . . . . . 
    . . . . . . . f f e e e . . . . 
    . . . . . . f f e e e e . . . . 
    `],
100,
characterAnimations.rule(Predicate.FacingLeft)
)
mySprite.setPosition(80, 21)
mySprite.setVelocity(50, 0)
mySprite.setBounceOnWall(true)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 1 1 . . . 1 1 . . 
    . . . 1 . . . . 1 . . 1 1 . . . 
    . . . 1 1 . 1 . 1 . . 1 . . . . 
    . . . . 1 . 1 . 1 . . 1 . . . 1 
    . 1 . . 1 . 1 . 1 . 1 . . . 1 1 
    . 1 . . 1 2 2 2 2 2 1 . . . 1 . 
    . . 1 . 2 2 . . 2 2 2 . 1 1 . . 
    1 1 1 2 2 . . . . . 2 2 1 . . . 
    . 1 1 2 . . . . . . . 2 2 . . . 
    . . . 2 . . . . . . . . 2 . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    `, SpriteKind.hoop)
mySprite2.setPosition(78, 113)
info.startCountdown(60)

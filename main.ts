function show_obstacles() {
    for (let n = 1; n < obstacles.length; n++) {
        if (0 > playerx - obstacles[n * 2 - 1] && playerx - obstacles[n * 2 - 1] < 2 && playery - obstacles[n * 2] < 2) {
            obstacless.push(game.createSprite(playerx - obstacles[n * 2 - 1], playery - obstacles[n * 2]))
        }
        
        if (0 > obstacles[n * 2 - 1] - playerx && obstacles[n * 2 - 1] - playerx < 2 && obstacles[n * 2] - playery < 2) {
            obstacless.push(game.createSprite(obstacles[n * 2 - 1] - playerx, obstacles[n * 2] - playery))
        }
        
        if (0 > obstacles[n * 2 - 1] - playerx && obstacles[n * 2 - 1] - playerx < 2 && playery - obstacles[n * 2] < 2) {
            obstacless.push(game.createSprite(obstacles[n * 2 - 1] - playerx, playery - obstacles[n * 2]))
        }
        
        if (0 > playerx - obstacles[n * 2 - 1] && playerx - obstacles[n * 2 - 1] < 2 && obstacles[n * 2] - playery < 2) {
            obstacless.push(game.createSprite(playerx - obstacles[n * 2 - 1], obstacles[n * 2] - playery))
        }
        
    }
}

input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (!(playery > 24)) {
        playery += 1
        show_obstacles()
    }
    
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    
    if (!(playerx > 0)) {
        playerx += -1
        show_obstacles()
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (!(playery > 0)) {
        playery += -1
        show_obstacles()
    }
    
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    
    if (!(playerx > 24)) {
        playerx += 1
        show_obstacles()
    }
    
})
let playery = 0
let playerx = 0
let obstacless : game.LedSprite[] = []
let player = game.createSprite(2, 2)
let obstacles = [1, 0, 1, 1, 2, 1, 3, 1, 4, 1]
show_obstacles()

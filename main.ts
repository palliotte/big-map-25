input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (!(playery > 24)) {
        playery += 1
    }
    
})
input.onGesture(Gesture.TiltLeft, function on_gesture_tilt_left() {
    
    if (!(playerx > 0)) {
        playerx += -1
    }
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (!(playery > 0)) {
        playery += -1
    }
    
})
input.onGesture(Gesture.TiltRight, function on_gesture_tilt_right() {
    
    if (!(playerx > 24)) {
        playerx += 1
    }
    
})
let playery = 0
let playerx = 0
let obstacless : number[] = []
playerx = 0
playery = 0
let player = game.createSprite(2, 2)
let obstacles = [1, 0, 1, 1, 2, 1, 3, 1, 4, 1]
function show_obstacles() {
    
}


def on_button_pressed_a():
    global playery
    if not (playery > 23):
        playery += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_left():
    global playerx
    if not (playerx > 3):
        playerx += -1
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_b():
    global playery
    if not (playery > 3):
        playery += -1
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    global playerx
    if not (playerx > 23):
        playerx += 1
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

playerx = 0
playery = 0
player = game.create_sprite(2, 2)
obstacles = [1,0,1,1,2,1,3,1,4,1]

def on_forever():
    for n in range(0,obstacles.length-1):
        if player.get(LedSpriteProperty.X)<
forever(on_forever)
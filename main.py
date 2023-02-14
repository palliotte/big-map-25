def show_obstacles():
    for n in range(1, len(obstacles)):
        if 0 > playerx - obstacles[n * 2 - 1] < 2 and playery - obstacles[n * 2] < 2:
            obstacless.append(game.create_sprite(playerx - obstacles[n * 2 - 1], playery - obstacles[n * 2]))
        if 0 > obstacles[n * 2 - 1] - playerx < 2 and obstacles[n * 2] - playery < 2:
            obstacless.append(game.create_sprite(obstacles[n * 2 - 1] - playerx, obstacles[n * 2] - playery))
        if 0 > obstacles[n * 2 - 1] - playerx < 2 and playery - obstacles[n * 2] < 2:
            obstacless.append(game.create_sprite(obstacles[n * 2 - 1] - playerx, playery - obstacles[n * 2]))
        if 0 > playerx - obstacles[n * 2 - 1] < 2 and obstacles[n * 2] - playery < 2:
            obstacless.append(game.create_sprite(playerx - obstacles[n * 2 - 1], obstacles[n * 2] - playery))

def on_button_pressed_a():
    global playery
    if not (playery > 24):
        playery += 1
        show_obstacles()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_left():
    global playerx
    if not (playerx > 0):
        playerx += -1
        show_obstacles()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_button_pressed_b():
    global playery
    if not (playery > 0):
        playery += -1
        show_obstacles()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_tilt_right():
    global playerx
    if not (playerx > 24):
        playerx += 1
        show_obstacles()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

playery = 0
playerx = 0
obstacless: List[game.LedSprite] = []
player = game.create_sprite(2, 2)
obstacles = [1, 0, 1, 1, 2, 1, 3, 1, 4, 1]
show_obstacles()
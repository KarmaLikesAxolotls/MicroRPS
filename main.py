def on_button_pressed_a():
    global ButtonPress
    if choosingscreen == 0:
        ButtonPress += 1
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    global choosingscreen, machineChose
    choosingscreen = 1
    music.play_tone(587, music.beat(BeatFraction.WHOLE))
    basic.show_string("3 2 1 GO")
    machineChose = randint(0, 2)
    if machineChose == 0:
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . . . . .
        """)
    elif machineChose == 1:
        basic.show_leds("""
            . # # . .
                        . # # # .
                        . # # # .
                        . # # # .
                        . # # # .
        """)
    elif machineChose == 2:
        basic.show_leds("""
            # # . . #
                        # # . # .
                        . . # . .
                        # # . # .
                        # # . . #
        """)
        if ButtonPress == 0:
            basic.show_icon(IconNames.ASLEEP)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global ButtonPress
    if choosingscreen == 0:
        ButtonPress += -1
        music.play_tone(262, music.beat(BeatFraction.WHOLE))
input.on_button_pressed(Button.B, on_button_pressed_b)

machineChose = 0
choosingscreen = 0
ButtonPress = 0
ButtonPress = 0
choosingscreen = 0

def on_forever():
    if choosingscreen == 0:
        if ButtonPress == 0:
            basic.show_leds("""
                . . . . .
                                . # # # .
                                . # # # .
                                . # # # .
                                . . . . .
            """)
        elif ButtonPress == 1:
            basic.show_leds("""
                . # # . .
                                . # # # .
                                . # # # .
                                . # # # .
                                . # # # .
            """)
        elif ButtonPress == 2:
            basic.show_icon(IconNames.SCISSORS)
basic.forever(on_forever)

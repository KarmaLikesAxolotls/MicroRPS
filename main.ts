input.onButtonPressed(Button.A, function () {
    if (choosingscreen == 0) {
        ButtonPress += 1
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.AB, function () {
    choosingscreen = 1
    music.playTone(587, music.beat(BeatFraction.Whole))
    basic.showString("3 2 1 GO")
    machineChose = randint(0, 2)
    if (machineChose == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        basic.pause(1000)
        // Draw
        // Win
        // L
        if (ButtonPress == 0) {
            basic.showIcon(IconNames.Asleep)
        } else if (ButtonPress == 2) {
            basic.showIcon(IconNames.Fabulous)
        } else if (ButtonPress == 1) {
            basic.showIcon(IconNames.Skull)
        }
    } else if (machineChose == 1) {
        basic.showLeds(`
            . # # . .
            . # # # .
            . # # # .
            . # # # .
            . # # # .
            `)
        basic.pause(1000)
        // Draw
        // Win
        // L
        if (ButtonPress == 1) {
            basic.showIcon(IconNames.Asleep)
        } else if (ButtonPress == 0) {
            basic.showIcon(IconNames.Fabulous)
        } else if (ButtonPress == 2) {
            basic.showIcon(IconNames.Skull)
        }
    } else if (machineChose == 2) {
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
        basic.pause(1000)
        // Draw
        // Win
        // L
        if (ButtonPress == 2) {
            basic.showIcon(IconNames.Asleep)
        } else if (ButtonPress == 1) {
            basic.showIcon(IconNames.Fabulous)
        } else if (ButtonPress == 0) {
            basic.showIcon(IconNames.Skull)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (choosingscreen == 0) {
        ButtonPress += -1
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
})
let machineChose = 0
let choosingscreen = 0
let ButtonPress = 0
ButtonPress = 0
choosingscreen = 0
basic.forever(function () {
    if (choosingscreen == 0) {
        if (ButtonPress == 0) {
            basic.showLeds(`
                . . . . .
                . # # # .
                . # # # .
                . # # # .
                . . . . .
                `)
        } else if (ButtonPress == 1) {
            basic.showLeds(`
                . # # . .
                . # # # .
                . # # # .
                . # # # .
                . # # # .
                `)
        } else if (ButtonPress == 2) {
            basic.showIcon(IconNames.Scissors)
        }
    }
})

/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: oct 2024
 * This program turns a servo
*/

//setup
const servoOne = robotbit.Servos.S1
basic.showIcon(IconNames.Happy)

//turns to 0 degrees
input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoOne, 0)
    basic.clearScreen()
    basic.showString('0')
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

//turns to 180 degrees
input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoOne, 180)
    basic.clearScreen()
    basic.showString('180')
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

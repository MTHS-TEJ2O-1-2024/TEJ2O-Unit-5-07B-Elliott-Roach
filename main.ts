/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Elliott Roach
 * Created on: oct 2024
 * This program turns a servo
*/

const servoOne = robotbit.Servos.S1

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    robotbit.Servo(servoOne, 0)
    basic.clearScreen()
    basic.showString('0')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    robotbit.Servo(servoOne, 180)
    basic.clearScreen()
    basic.showString('180')
    basic.showIcon(IconNames.SmallSquare)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
})
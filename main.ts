input.onPinPressed(TouchPin.P0, function () {
    irRemote.connectInfrared(DigitalPin.P0)
    for (let index = 0; index < 2; index++) {
        mecanumRobotV2.setLed(LedCount.Left, LedState.ON)
    }
})
let ir_button = 0
irRemote.connectInfrared(DigitalPin.P0)
mecanumRobotV2.state()
// pulsanti:
// - sx: 68
// - dx: 67
// - up: 70
// - down: 21
basic.forever(function () {
    ir_button = irRemote.returnIrButton()
    if (ir_button == 67) {
        basic.showString("R")
        mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 30)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 30)
    } else if (ir_button == 68) {
        basic.showString("L")
        mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 30)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 30)
    } else if (ir_button == 70) {
        basic.showString("U")
        mecanumRobotV2.Motor(LR.Upper_left, MD.Forward, 30)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Forward, 30)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Forward, 30)
        mecanumRobotV2.Motor(LR.Lower_left, MD.Forward, 30)
    } else if (ir_button == 21) {
        basic.showString("D")
        mecanumRobotV2.Motor(LR.Lower_left, MD.Back, 30)
        mecanumRobotV2.Motor(LR.Lower_right, MD.Back, 30)
        mecanumRobotV2.Motor(LR.Upper_right, MD.Back, 30)
        mecanumRobotV2.Motor(LR.Upper_left, MD.Back, 30)
    } else {
        basic.clearScreen()
        mecanumRobotV2.state()
    }
})

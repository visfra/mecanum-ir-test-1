let ir_button = 0
irRemote.connectInfrared(DigitalPin.P0)
// pulsanti:
// - sx: 68
// - dx: 67
// - up: 70
// - down: 21
basic.forever(function () {
    ir_button = irRemote.returnIrButton()
    if (ir_button == 68) {
        basic.showString("L")
    } else if (ir_button == 67) {
        basic.showString("R")
    } else if (ir_button == 70) {
        basic.showString("U")
    } else if (ir_button == 21) {
        basic.showString("D")
    } else {
        basic.clearScreen()
    }
})

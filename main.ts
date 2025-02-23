let var1 = 0
irRemote.connectInfrared(DigitalPin.P0)
// pulsanti:
// - sx: 68
// - dx: 67
// - up: 70
// - down: 21
basic.forever(function () {
    var1 = irRemote.returnIrButton()
    basic.showString("" + (var1))
})

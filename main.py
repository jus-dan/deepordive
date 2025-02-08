input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    strip.show()
    servos.P0.setAngle(90)
})
input.onButtonPressed(Button.B, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    strip.show()
})
radio.onReceivedValue(function (name, value) {
    if (helligkeit + value > 255) {
    	
    } else if (helligkeit + value < 0) {
        servos.P0.setAngle(180)
    } else {
        servos.P0.setAngle(0)
        helligkeit += value
        strip.setBrightness(helligkeit)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        strip.show()
        if (name == "A") {
            a_permitted = 0
        }
        if (name == "B") {
            b_permitted = 0
        }
    }
})
let b_permitted = 0
let a_permitted = 0
let helligkeit = 0
let strip: neopixel.Strip = null
radio.setGroup(42)
strip = neopixel.create(DigitalPin.P2, 16, NeoPixelMode.RGB)
helligkeit = 255
strip.setBrightness(helligkeit)
strip.showColor(neopixel.colors(NeoPixelColors.White))
strip.show()
a_permitted = 1
b_permitted = 1
basic.forever(function () {
    if (a_permitted == 0) {
        basic.pause(100)
        a_permitted = 1
    }
    if (b_permitted == 0) {
        basic.pause(100)
        b_permitted = 1
    }
})

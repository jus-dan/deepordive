input.onButtonPressed(Button.A, function () {
    DFPlayerPro.MP3_playFilePathName("downvote.mp3")
    setMode(1)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        setMode(1)
    }
    if (receivedString == "B") {
        setMode(1)
    }
})
input.onButtonPressed(Button.B, function () {
    DFPlayerPro.MP3_playFilePathName("upvote.mp3")
    setMode(1)
})
function setMode (modeLokal: number) {
    if (modeLokal == 0) {
        mode = 0
        strip.show()
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    }
    if (modeLokal == 1) {
        mode = 1
        strip.showRainbow(1, 360)
        strip.show()
    }
}
radio.onReceivedValue(function (name, value) {
    if (helligkeit + value > 255) {
    	
    } else if (helligkeit + value < 25) {
        servos.P0.setAngle(105)
    } else if (helligkeit + value < 0) {
    	
    } else {
        servos.P0.setAngle(0)
        helligkeit += value
        strip.setBrightness(helligkeit)
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        if (value > 0) {
            DFPlayerPro.MP3_playFilePathName("upvote.mp3")
        } else {
            DFPlayerPro.MP3_playFilePathName("downvote.mp3")
        }
    }
})
let mode = 0
let helligkeit = 0
let strip: neopixel.Strip = null
radio.setGroup(42)
strip = neopixel.create(DigitalPin.P2, 16, NeoPixelMode.RGB)
helligkeit = 255
strip.setBrightness(helligkeit)
strip.showColor(neopixel.colors(NeoPixelColors.White))
strip.show()
let a_permitted = 1
let b_permitted = 1
mode = 0
DFPlayerPro.MP3_setSerial(SerialPin.P15, SerialPin.P1)
DFPlayerPro.MP3_setVol(24)
DFPlayerPro.MP3_setPlayMode(DFPlayerPro.PlayType.playOneSongAndPause)
basic.forever(function () {
    if (mode == 1) {
        strip.rotate(1)
        strip.show()
        basic.pause(100)
    }
})

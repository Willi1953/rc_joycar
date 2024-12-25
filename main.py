def on_button_pressed_a():
    global Start
    Start = 1
    JoyCar.light(ToggleSwitch.ON)
    for index in range(4):
        JoyCar.stop(StopIntensity.SOFT)
        JoyCar.brakelight(ToggleSwitch.OFF)
        JoyCar.light(ToggleSwitch.ON)
        JoyCar.drive(FRDirection.FORWARD, 35)
        basic.pause(5000)
        JoyCar.stop(StopIntensity.SOFT)
        JoyCar.turn(FRDirection.FORWARD, LRDirection.RIGHT, 30, 0)
        basic.pause(2000)
        JoyCar.stop(StopIntensity.SOFT)
        JoyCar.turn(FRDirection.FORWARD, LRDirection.LEFT, 32, 0)
        basic.pause(3000)
        JoyCar.hazardlights(ToggleSwitch.OFF)
        JoyCar.stop(StopIntensity.SOFT)
        JoyCar.indicator(ToggleSwitch.ON, SensorLRSelection.LEFT)
        JoyCar.turn(FRDirection.FORWARD, LRDirection.LEFT, 28, 3)
        basic.pause(3000)
        JoyCar.stop(StopIntensity.SOFT)
        JoyCar.indicator(ToggleSwitch.ON, SensorLRSelection.RIGHT)
        JoyCar.turn(FRDirection.FORWARD, LRDirection.RIGHT, 21, 3)
        basic.pause(3000)
        JoyCar.stop(StopIntensity.SOFT)
        JoyCar.light(ToggleSwitch.OFF)
        JoyCar.hazardlights(ToggleSwitch.ON)
        JoyCar.reversinglight(ToggleSwitch.ON)
        JoyCar.drive(FRDirection.REVERSE, 44)
        JoyCar.brakelight(ToggleSwitch.ON)
        basic.pause(3000)
        JoyCar.stop(StopIntensity.SOFT)
    Start += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

Start = 0
Winkel = 65
radio.set_group(1)
JoyCar.stop(StopIntensity.INTENSE)
Start = 0

def on_forever():
    global Winkel
    if Start == 1:
        for Index in range(51):
            if Winkel < 115:
                Winkel += 1
                JoyCar.servo(1, Winkel)
                basic.pause(50)
                if Winkel == 90:
                    JoyCar.servo(2, 60)
        for Index2 in range(51):
            if Winkel > 65:
                Winkel += -1
                JoyCar.servo(1, Winkel)
                basic.pause(50)
                if Winkel == 90:
                    JoyCar.servo(2, 119)
basic.forever(on_forever)

def on_forever2():
    if Start == 1:
        if JoyCar.obstacleavoidance(SensorLRSelection.RIGHT):
            JoyCar.stop(StopIntensity.INTENSE)
            basic.pause(2000)
            JoyCar.turn(FRDirection.FORWARD, LRDirection.LEFT, 24, 5)
            basic.pause(5000)
            JoyCar.stop(StopIntensity.SOFT)
        elif JoyCar.obstacleavoidance(SensorLRSelection.LEFT):
            JoyCar.stop(StopIntensity.INTENSE)
            basic.pause(2000)
            JoyCar.light(ToggleSwitch.ON)
            JoyCar.turn(FRDirection.FORWARD, LRDirection.RIGHT, 24, 5)
            basic.pause(5000)
            JoyCar.stop(StopIntensity.SOFT)
        if JoyCar.sonar() < 25:
            JoyCar.stop(StopIntensity.SOFT)
            basic.pause(2000)
            JoyCar.light(ToggleSwitch.OFF)
            JoyCar.reversinglight(ToggleSwitch.ON)
            JoyCar.turn(FRDirection.REVERSE, LRDirection.RIGHT, 40, 3)
            basic.pause(4000)
            JoyCar.stop(StopIntensity.SOFT)
            JoyCar.turn(FRDirection.REVERSE, LRDirection.LEFT, 40, 3)
            basic.pause(8000)
            JoyCar.stop(StopIntensity.SOFT)
            JoyCar.light(ToggleSwitch.ON)
basic.forever(on_forever2)

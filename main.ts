input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    Start = 1
    JoyCar.light(ToggleSwitch.On)
    for (let index = 0; index < 4; index++) {
        JoyCar.stop(StopIntensity.Soft)
        JoyCar.brakelight(ToggleSwitch.Off)
        JoyCar.light(ToggleSwitch.On)
        JoyCar.drive(FRDirection.Forward, 35)
        basic.pause(5000)
        JoyCar.stop(StopIntensity.Soft)
        JoyCar.turn(FRDirection.Forward, LRDirection.Right, 30, 0)
        basic.pause(2000)
        JoyCar.stop(StopIntensity.Soft)
        JoyCar.turn(FRDirection.Forward, LRDirection.Left, 32, 0)
        basic.pause(3000)
        JoyCar.hazardlights(ToggleSwitch.Off)
        JoyCar.stop(StopIntensity.Soft)
        JoyCar.indicator(ToggleSwitch.On, SensorLRSelection.Left)
        JoyCar.turn(FRDirection.Forward, LRDirection.Left, 28, 3)
        basic.pause(3000)
        JoyCar.stop(StopIntensity.Soft)
        JoyCar.indicator(ToggleSwitch.On, SensorLRSelection.Right)
        JoyCar.turn(FRDirection.Forward, LRDirection.Right, 21, 3)
        basic.pause(3000)
        JoyCar.stop(StopIntensity.Soft)
        JoyCar.light(ToggleSwitch.Off)
        JoyCar.hazardlights(ToggleSwitch.On)
        JoyCar.reversinglight(ToggleSwitch.On)
        JoyCar.drive(FRDirection.Reverse, 44)
        JoyCar.brakelight(ToggleSwitch.On)
        basic.pause(3000)
        JoyCar.stop(StopIntensity.Soft)
    }
    Start += 1
})
let Start = 0
let Winkel = 65
radio.setGroup(1)
JoyCar.stop(StopIntensity.Intense)
Start = 0
basic.forever(function on_forever() {
    
    if (Start == 1) {
        for (let Index = 0; Index < 51; Index++) {
            if (Winkel < 115) {
                Winkel += 1
                JoyCar.servo(1, Winkel)
                basic.pause(50)
                if (Winkel == 90) {
                    JoyCar.servo(2, 60)
                }
                
            }
            
        }
        for (let Index2 = 0; Index2 < 51; Index2++) {
            if (Winkel > 65) {
                Winkel += -1
                JoyCar.servo(1, Winkel)
                basic.pause(50)
                if (Winkel == 90) {
                    JoyCar.servo(2, 119)
                }
                
            }
            
        }
    }
    
})
basic.forever(function on_forever2() {
    if (Start == 1) {
        if (JoyCar.obstacleavoidance(SensorLRSelection.Right)) {
            JoyCar.stop(StopIntensity.Intense)
            basic.pause(2000)
            JoyCar.turn(FRDirection.Forward, LRDirection.Left, 24, 5)
            basic.pause(5000)
            JoyCar.stop(StopIntensity.Soft)
        } else if (JoyCar.obstacleavoidance(SensorLRSelection.Left)) {
            JoyCar.stop(StopIntensity.Intense)
            basic.pause(2000)
            JoyCar.light(ToggleSwitch.On)
            JoyCar.turn(FRDirection.Forward, LRDirection.Right, 24, 5)
            basic.pause(5000)
            JoyCar.stop(StopIntensity.Soft)
        }
        
        if (JoyCar.sonar() < 25) {
            JoyCar.stop(StopIntensity.Soft)
            basic.pause(2000)
            JoyCar.light(ToggleSwitch.Off)
            JoyCar.reversinglight(ToggleSwitch.On)
            JoyCar.turn(FRDirection.Reverse, LRDirection.Right, 40, 3)
            basic.pause(4000)
            JoyCar.stop(StopIntensity.Soft)
            JoyCar.turn(FRDirection.Reverse, LRDirection.Left, 40, 3)
            basic.pause(8000)
            JoyCar.stop(StopIntensity.Soft)
            JoyCar.light(ToggleSwitch.On)
        }
        
    }
    
})

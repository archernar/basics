## Java Exercises 
### Smart Thermostat Controller 

    Design a simple state machine for a thermostat. Create an `enum` `ThermostatState` 
    with values `HEATING`, `COOLING`, and `IDLE`. Write a `Thermostat` class that 
    holds the `currentState`, `targetTemperature`, and `currentTemperature`. Create 
    a method `updateState()` that checks the `currentTemperature` against the `targetTemperature`. 
    If the current is 2 degrees below the target, it should switch to 
    the `HEATING` state. If it's 2 degrees above, it should switch to `COOLING`. Otherwise, 
    it should be `IDLE`. Write a main method that simulates temperature changes 
    and prints the thermostat's state after each change. 
    
    

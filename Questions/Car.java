/**
 * Car.java
 *
 * This class models a car to demonstrate object-oriented programming concepts.
 * It introduces the idea of an object's "state" and how that state can
 * control its behavior.
 *
 * CONCEPTS DEMONSTRATED:
 * 1.  State and Behavior: A car object has a state (make, model, year, current speed,
 * engine status) and behaviors (startEngine, accelerate, brake). The methods (behaviors)
 * often depend on the current state. For example, you cannot accelerate if the engine is off.
 *
 * 2.  Encapsulation: The car's internal data is `private`. You can't just set the speed
 * directly. You must use the `accelerate` or `brake` methods, which ensures the car
 * behaves according to its rules (e.g., not accelerating with the engine off).
 *
 * 3.  Constructor: Initializes the car's permanent attributes (`make`, `model`, `year`) and
 * sets its initial state (`speed = 0`, `isEngineOn = false`).
 *
 * 4.  Boolean Logic: The class heavily uses boolean (`true`/`false`) variables and `if/else`
 * statements to manage the car's state and control what actions are permissible.
 *
 * 5.  Getters: The `getSpeed()` and `isEngineOn()` methods are simple "getter" methods. They
 * provide read-only access to a piece of the object's private state without allowing
 * external code to modify it directly.
 *
 * 6.  Static Counter: Just like in the previous examples, a `static` variable is used to
 * track a value that is shared across all instances of the class—in this case, the
 * total number of cars that have been "manufactured" (created as objects).
 *
 * 7.  The `toString()` Method: Provides a clean, summary of the car's current state.
 */
public class Car {

    // --- INSTANCE VARIABLES (STATE) ---
    private String make;
    private String model;
    private int year;
    private int speed;
    private boolean isEngineOn;

    // --- STATIC VARIABLE ---
    private static int totalCarsManufactured = 0;

    /**
     * Constructor for the Car class.
     * @param make The manufacturer of the car (e.g., "Toyota").
     * @param model The model of the car (e.g., "Camry").
     * @param year The manufacturing year.
     */
    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;

        // A new car always starts off parked.
        this.speed = 0;
        this.isEngineOn = false;

        totalCarsManufactured++;
        System.out.println("A " + year + " " + make + " " + model + " rolled off the assembly line.");
    }

    // --- INSTANCE METHODS (BEHAVIORS) ---

    /**
     * Starts the car's engine.
     */
    public void startEngine() {
        if (!isEngineOn) {
            isEngineOn = true;
            System.out.println("Vroom! The engine is now on.");
        } else {
            System.out.println("The engine is already running.");
        }
    }

    /**
     * Stops the car's engine, but only if the car is not moving.
     */
    public void stopEngine() {
        if (isEngineOn) {
            if (speed == 0) {
                isEngineOn = false;
                System.out.println("The engine has been turned off.");
            } else {
                System.out.println("Cannot turn off the engine while the car is moving!");
            }
        } else {
            System.out.println("The engine is already off.");
        }
    }

    /**
     * Increases the car's speed. Only works if the engine is on.
     * @param amount The amount to increase the speed by (in mph).
     */
    public void accelerate(int amount) {
        if (isEngineOn) {
            if (amount > 0) {
                this.speed += amount;
                System.out.println("Accelerating. Current speed: " + this.speed + " mph.");
            }
        } else {
            System.out.println("Cannot accelerate, the engine is off.");
        }
    }

    /**
     * Decreases the car's speed. The speed cannot go below 0.
     * @param amount The amount to decrease the speed by (in mph).
     */
    public void brake(int amount) {
        if (amount > 0) {
            this.speed = Math.max(0, this.speed - amount);
            System.out.println("Braking. Current speed: " + this.speed + " mph.");
        }
    }

    // --- GETTER METHODS ---
    public int getSpeed() {
        return this.speed;
    }

    public boolean isEngineOn() {
        return this.isEngineOn;
    }

    // --- OVERRIDE toString ---
    /**
     * In Java, the @Override annotation indicates that a method in a subclass is intended to override
     * a method in its superclass. Its main purpose is to help you avoid bugs by having the compiler check your work.
     * If a method is marked with @Override, the compiler will verify that a method with the same signature
     * (name and parameters) actually exists in the parent class or interface. If it doesn't, the compiler will generate an error.
     */
    @Override
    public String toString() {
        String status = isEngineOn ? "Running" : "Off";
        return this.year + " " + this.make + " " + this.model + " | Speed: " + this.speed + " mph | Engine: " + status;
    }

    // --- STATIC METHOD ---
    public static int getTotalCarsManufactured() {
        return totalCarsManufactured;
    }


    // --- MAIN METHOD ---
    public static void main(String[] args) {
        System.out.println("Total cars manufactured so far: " + Car.getTotalCarsManufactured());
        System.out.println("------------------------------------");

        Car myCar = new Car("Ford", "Mustang", 2024);
        Car familyCar = new Car("Honda", "Odyssey", 2023);
        System.out.println("------------------------------------");

        System.out.println("My Car's initial state: " + myCar);
        myCar.accelerate(20); // Should fail
        myCar.startEngine();
        myCar.accelerate(30);
        myCar.accelerate(25);
        myCar.brake(15);
        System.out.println("Current state: " + myCar);
        System.out.println("------------------------------------");

        System.out.println("Family Car's initial state: " + familyCar);
        familyCar.startEngine();
        familyCar.stopEngine();
        familyCar.accelerate(10); // Should fail again
        System.out.println("Current state: " + familyCar);
        System.out.println("------------------------------------");


        System.out.println("Trying to turn off my car while it's moving...");
        myCar.stopEngine(); // Should fail because speed is > 0
        System.out.println("Current speed is: " + myCar.getSpeed() + " mph");
        myCar.brake(40); // Brake to a full stop
        myCar.stopEngine(); // Should now succeed
        System.out.println("Final state: " + myCar);
        System.out.println("------------------------------------");

        System.out.println("Total cars manufactured at the end of the day: " + Car.getTotalCarsManufactured());
    }
}


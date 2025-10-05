/**
 * JavaFundamentals.java
 *
 * This single class serves as a comprehensive demonstration of the fundamental
 * programming language elements in Java. It is designed for educational purposes
 * to showcase syntax and core concepts in one place.
 *
 * Concepts demonstrated include:
 * 1.  Class and Main Method structure
 * 2.  Comments (Single-line, Multi-line, Javadoc)
 * 3.  Variables and Primitive Data Types
 * 4.  Literals
 * 5.  Operators (Arithmetic, Relational, Logical, etc.)
 * 6.  Control Flow (if-else, switch, for, while, do-while)
 * 7.  Methods (including static, instance, and overloaded methods)
 * 8.  Constructors
 * 9.  Object-Oriented Programming (OOP) Concepts:
 * - Encapsulation (private fields with public getters/setters)
 * - Inheritance (using an inner class)
 * - Polymorphism (method overloading and overriding)
 * - Abstraction (using an interface and an abstract inner class)
 * 10. Arrays
 * 11. Enums
 * 12. Exception Handling (try-catch-finally)
 * 13. String manipulation
 */
public class JavaFundamentals {

    // =================================================================
    // 3. VARIABLES & DATA TYPES (Instance Variables)
    // =================================================================

    // Encapsulation: fields are private to restrict direct access from outside the class.
    private String name;
    private int version;

    // A static variable belongs to the class itself, not to any specific instance.
    // There is only one copy of this variable, shared among all objects of this class.
    public static final String LANGUAGE_NAME = "Java";


    // =================================================================
    // 8. CONSTRUCTORS
    // =================================================================

    /**
     * Default constructor. Initializes the object with default values.
     */
    public JavaFundamentals() {
        this.name = "Demo";
        this.version = 1;
    }

    /**
     * Overloaded constructor. Initializes the object with provided values.
     * @param name The name for this demo instance.
     * @param version The version number for this demo instance.
     */
    public JavaFundamentals(String name, int version) {
        this.name = name;
        this.version = version;
    }


    // =================================================================
    // 1. CLASS AND MAIN METHOD
    // =================================================================

    /**
     * The main method is the entry point of any Java application.
     * It is static, meaning it can be called without creating an instance of the class.
     * @param args Command-line arguments passed to the program.
     */
    public static void main(String[] args) {
        System.out.println("====== Welcome to the " + LANGUAGE_NAME + " Fundamentals Demo! ======");

        // Create an instance of the class to access instance members
        JavaFundamentals demo = new JavaFundamentals("Core Concepts", 17);

        // --- Calling methods to demonstrate concepts ---
        demo.demonstratePrimitivesAndOperators();
        demo.demonstrateControlFlow();
        demo.demonstrateMethods();
        demo.demonstrateArrays();
        demo.demonstrateEnums();
        demo.demonstrateExceptionHandling();
        demo.demonstrateOOP();
    }


    // =================================================================
    // 3. PRIMITIVES & 5. OPERATORS
    // =================================================================

    public void demonstratePrimitivesAndOperators() {
        System.out.println("\n--- 3. Demonstrating Primitives and 5. Operators ---");

        // Primitive data types are the most basic data types available in Java.
        byte myByte = 127;          // 8-bit signed integer (-128 to 127)
        short myShort = 32000;      // 16-bit signed integer
        int myInt = 2_000_000_000;  // 32-bit signed integer (underscores for readability)
        long myLong = 9_000_000_000_000_000_000L; // 64-bit signed integer (L suffix is required)
        float myFloat = 3.14f;      // 32-bit floating point (f suffix is required)
        double myDouble = 2.71828;  // 64-bit floating point
        char myChar = 'A';          // 16-bit Unicode character
        boolean myBoolean = true;   // true or false

        System.out.println("Byte: " + myByte);

        // Arithmetic Operators
        int a = 10;
        int b = 3;
        System.out.println("a + b = " + (a + b)); // Addition
        System.out.println("a - b = " + (a - b)); // Subtraction
        System.out.println("a * b = " + (a * b)); // Multiplication
        System.out.println("a / b = " + (a / b)); // Integer Division
        System.out.println("a % b = " + (a % b)); // Modulo (remainder)

        // Unary Operators
        a++; // Increment
        System.out.println("a after increment: " + a);

        // Relational and Logical Operators
        boolean isGreater = (a > b); // true
        boolean areEqual = (a == b); // false
        System.out.println("Is a > b AND a is not 10? " + (isGreater && a != 10)); // false
        System.out.println("Is a > b OR a is 10? " + (isGreater || a == 10)); // true

        // Ternary Operator
        String result = (myBoolean) ? "It's true!" : "It's false!";
        System.out.println("Ternary result: " + result);
    }


    // =================================================================
    // 6. CONTROL FLOW STATEMENTS
    // =================================================================

    public void demonstrateControlFlow() {
        System.out.println("\n--- 6. Demonstrating Control Flow ---");

        // if-else if-else statement
        int score = 85;
        if (score >= 90) {
            System.out.println("Grade: A");
        } else if (score >= 80) {
            System.out.println("Grade: B");
        } else {
            System.out.println("Grade: C or lower");
        }

        // switch statement (works with byte, short, char, int, enums, String)
        int day = 4;
        String dayString;
        switch (day) {
            case 1:  dayString = "Monday"; break;
            case 2:  dayString = "Tuesday"; break;
            case 3:  dayString = "Wednesday"; break;
            case 4:  dayString = "Thursday"; break;
            case 5:  dayString = "Friday"; break;
            default: dayString = "Weekend"; break;
        }
        System.out.println("Switch statement result: " + dayString);

        // for loop
        System.out.print("For loop with continue: ");
        for (int i = 0; i < 5; i++) {
            if (i == 2) {
                continue; // Skip the rest of the loop for this iteration
            }
            System.out.print(i + " ");
        }
        System.out.println();

        // while loop
        System.out.print("While loop with break: ");
        int count = 0;
        while (count < 10) {
            if (count == 5) {
                break; // Exit the loop entirely
            }
            System.out.print(count + " ");
            count++;
        }
        System.out.println();

        // do-while loop (always executes at least once)
        System.out.print("Do-while loop: ");
        int j = 5;
        do {
            System.out.print(j + " ");
            j--;
        } while (j > 5); // Condition is false, but loop ran once
        System.out.println();
    }


    // =================================================================
    // 7. METHODS
    // =================================================================

    public void demonstrateMethods() {
        System.out.println("\n--- 7. Demonstrating Methods ---");

        // Calling an instance method
        displayInfo();

        // Calling an overloaded method
        int sumInt = add(5, 10);
        double sumDouble = add(3.5, 6.5);
        System.out.println("Sum of ints: " + sumInt);
        System.out.println("Sum of doubles: " + sumDouble);

        // Calling a static method
        JavaFundamentals.showLanguage();
    }

    // Instance method: operates on an instance of the class
    public void displayInfo() {
        System.out.println("Instance Method: Demo Name = " + this.name + ", Version = " + this.version);
    }

    // Static method: can be called without creating an object
    public static void showLanguage() {
        System.out.println("Static Method: This code is written in " + LANGUAGE_NAME);
    }

    // Overloading: Same method name, different parameters
    public int add(int a, int b) {
        return a + b;
    }

    public double add(double a, double b) {
        return a + b;
    }


    // =================================================================
    // 10. ARRAYS
    // =================================================================

    public void demonstrateArrays() {
        System.out.println("\n--- 10. Demonstrating Arrays ---");

        // Declare and initialize an array of integers
        int[] numbers = {10, 20, 30, 40, 50};

        System.out.println("Accessing an array element: " + numbers[2]); // Access the 3rd element

        // Iterate through an array using an enhanced for loop (for-each)
        System.out.print("Iterating through array: ");
        for (int number : numbers) {
            System.out.print(number + " ");
        }
        System.out.println();
    }

    // =================================================================
    // 11. ENUMS
    // =================================================================

    // An enum is a special "class" that represents a group of constants.
    public enum Difficulty {
        EASY, MEDIUM, HARD
    }

    public void demonstrateEnums() {
        System.out.println("\n--- 11. Demonstrating Enums ---");
        Difficulty level = Difficulty.MEDIUM;
        System.out.println("Current difficulty level: " + level);
    }


    // =================================================================
    // 12. EXCEPTION HANDLING
    // =================================================================

    public void demonstrateExceptionHandling() {
        System.out.println("\n--- 12. Demonstrating Exception Handling ---");
        try {
            // Code that might throw an exception
            int result = 10 / 0;
            System.out.println(result);
        } catch (ArithmeticException e) {
            // This block catches the specific exception
            System.out.println("Caught an exception: Cannot divide by zero.");
        } finally {
            // This block always executes, whether an exception occurred or not
            System.out.println("The 'finally' block always runs.");
        }
    }


    // =================================================================
    // 9. OBJECT-ORIENTED PROGRAMMING (OOP)
    // =================================================================
    
    // Interface for Abstraction
    interface Describable {
        String getDescription();
    }

    // Inner class to demonstrate Inheritance and Abstraction
    // It inherits from JavaFundamentals and implements Describable
    class AdvancedDemo extends JavaFundamentals implements Describable {
        private String topic;

        public AdvancedDemo(String name, int version, String topic) {
            super(name, version); // Call the constructor of the superclass
            this.topic = topic;
        }

        // Polymorphism: Overriding the displayInfo method from the parent class
        @Override
        public void displayInfo() {
            System.out.println("Overridden Method: Topic = " + this.topic);
        }

        // Implementing the method from the Describable interface
        @Override
        public String getDescription() {
            return "This is an advanced demo focusing on " + this.topic + ".";
        }
    }

    public void demonstrateOOP() {
        System.out.println("\n--- 9. Demonstrating OOP ---");
        
        // Encapsulation
        JavaFundamentals encapsulatedDemo = new JavaFundamentals();
        encapsulatedDemo.setName("Encapsulation Example");
        System.out.println("Getter result: " + encapsulatedDemo.getName());

        // Inheritance and Polymorphism
        AdvancedDemo advanced = new AdvancedDemo("OOP Demo", 2, "Inheritance");
        advanced.displayInfo(); // This calls the overridden method in AdvancedDemo

        // Abstraction through an interface
        System.out.println("Interface method result: " + advanced.getDescription());
    }

    // --- Getters and Setters for Encapsulation ---
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getVersion() {
        return version;
    }

    public void setVersion(int version) {
        this.version = version;
    }
}


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.time.LocalDate;

/**
 * JavaClassroomDemo: A single class demonstrating various aspects of
 * the Java Programming Language and the Standard Class Library (SCL).
 *
 * This file is designed for college-level introductory Java courses.
 */
public class JavaClassroomDemo {

    // -------------------------------------------------------------------------
    // 1. Instance Variables (State of the Object)
    // -------------------------------------------------------------------------

    // A static (class-level) constant
    public static final double PI_VALUE = Math.PI;

    // An instance variable (belongs to a specific object)
    private String demoName;

    /**
     * Constructor: Used to initialize the object.
     * @param name The name for this demonstration instance.
     */
    public JavaClassroomDemo(String name) {
        this.demoName = name;
        System.out.println("\n--- Object Initialized: " + this.demoName + " ---");
    }

    // -------------------------------------------------------------------------
    // 2. Instance Methods (Behavior of the Object)
    // -------------------------------------------------------------------------

    /**
     * Demonstrates method overloading by calculating area for different shapes.
     * Overloading means having multiple methods with the same name but different
     * parameter lists.
     */
    public void demonstrateOverloading(double side) {
        System.out.println("\n[Method Overloading] Area of Square (side=" + side + "): " + (side * side));
    }

    public double demonstrateOverloading(double length, double width) {
        double area = length * width;
        System.out.println("[Method Overloading] Area of Rectangle (l=" + length + ", w=" + width + "): " + area);
        return area;
    }

    // -------------------------------------------------------------------------
    // 3. Static Methods (Utility methods belonging to the Class, not an object)
    // -------------------------------------------------------------------------

    /**
     * The main entry point for the application.
     * @param args Command line arguments (not used in this demo).
     */
    public static void main(String[] args) {
        System.out.println("=================================================");
        System.out.println("  Java Programming Language & SCL Demonstration  ");
        System.out.println("=================================================");

        // --- Section 1: Data Types and Variables ---
        System.out.println("\n--- Section 1: Data Types and Variables ---");
        demonstrateDataTypes();

        // --- Section 2: Control Flow ---
        System.out.println("\n--- Section 2: Control Flow ---");
        demonstrateControlFlow();

        // --- Section 3: Arrays and Collections ---
        System.out.println("\n--- Section 3: Arrays and Collections ---");
        demonstrateArraysAndCollections();

        // --- Section 4: Object-Oriented Concepts (Using the Instance) ---
        System.out.println("\n--- Section 4: Object-Oriented Concepts ---");
        JavaClassroomDemo myDemo = new JavaClassroomDemo("SCL and Core Features Demo");
        myDemo.demonstrateOverloading(5.0); // Call overloaded method 1
        myDemo.demonstrateOverloading(4.0, 6.0); // Call overloaded method 2

        // Demonstrate a static final constant
        System.out.printf("[Static Constant] The value of PI (from Math.PI via class constant) is: %.5f\n", PI_VALUE);

        // --- Section 5: Standard Class Library (SCL) Features ---
        System.out.println("\n--- Section 5: Standard Class Library (SCL) ---");
        demonstrateStringAndMathSCL();
        demonstrateDateTimeSCL();

        // --- Section 6: User Input and Error Handling ---
        System.out.println("\n--- Section 6: User Input and Error Handling ---");
        demonstrateInputAndErrorHandling();
    }

    /**
     * Demonstrates Java's primitive data types and their corresponding Wrapper classes.
     */
    public static void demonstrateDataTypes() {
        // Primitives (Value types - stored directly)
        int integerValue = 100;
        double decimalValue = 3.14159;
        boolean isTrue = true;
        char singleChar = 'A';

        // Wrappers (Reference types - provide utility methods and allow null values)
        Integer wrapperInt = Integer.valueOf(integerValue);
        Double wrapperDouble = decimalValue; // Auto-boxing (automatic conversion)

        System.out.println("[Primitive int] Value: " + integerValue + " | Range Max: " + Integer.MAX_VALUE);
        System.out.println("[Primitive double] Value: " + decimalValue);
        System.out.println("[Wrapper Integer] Value: " + wrapperInt + " | Parsed from String: " + Integer.parseInt("123"));
        System.out.println("[Primitive boolean] Value: " + isTrue);
        System.out.println("[Primitive char] Value: " + singleChar);
    }

    /**
     * Demonstrates standard control flow structures: if-else, switch, for loop, and while loop.
     */
    public static void demonstrateControlFlow() {
        int score = 85;

        // 1. If-Else-If Structure
        System.out.println("\n[Control Flow] 1. If-Else-If Demo (Score: " + score + ")");
        if (score >= 90) {
            System.out.println("  Grade: A");
        } else if (score >= 80) {
            System.out.println("  Grade: B (Condition matched here)");
        } else {
            System.out.println("  Grade: C or below");
        }

        // 2. Switch Expression (Java 14+ style - concise and returns a value)
        int day = 3;
        String dayName = switch (day) {
            case 1 -> "Monday";
            case 2 -> "Tuesday";
            case 3 -> "Wednesday (Switch matched here)";
            case 4, 5 -> "Thursday/Friday";
            default -> "Weekend or Invalid Day";
        };
        System.out.println("\n[Control Flow] 2. Switch Demo (Day " + day + "): " + dayName);

        // 3. For Loop (Iterating a fixed number of times)
        System.out.println("\n[Control Flow] 3. For Loop Demo (Counting to 5):");
        for (int i = 1; i <= 5; i++) {
            System.out.print("  " + i);
        }
        System.out.println();

        // 4. While Loop (Iterating until a condition is met)
        System.out.println("\n[Control Flow] 4. While Loop Demo (Countdown):");
        int countdown = 3;
        while (countdown > 0) {
            System.out.print("  " + countdown);
            countdown--; // Crucial to prevent infinite loop
        }
        System.out.println("\n  Lift-off!");
    }

    /**
     * Demonstrates one-dimensional arrays and the generic List interface using ArrayList.
     */
    public static void demonstrateArraysAndCollections() {
        // 1. Array: Fixed size, homogeneous data structure
        String[] subjects = new String[3];
        subjects[0] = "Math";
        subjects[1] = "Java";
        subjects[2] = "History";

        System.out.println("\n[Array] Contents: " + Arrays.toString(subjects));
        System.out.println("[Array] Accessing element at index 1: " + subjects[1]);

        // 2. ArrayList: Dynamic size, part of the Collections Framework
        // Uses Generics (<Integer>) to enforce type safety
        List<Integer> scores = new ArrayList<>();
        scores.add(95);
        scores.add(88);
        scores.add(72);

        System.out.println("\n[ArrayList] Initial size: " + scores.size());
        scores.remove(1); // Remove 88 (at index 1)
        scores.add(0, 100); // Add 100 at index 0

        System.out.println("[ArrayList] Contents after modification:");

        // Enhanced For Loop (For-Each loop)
        for (int score : scores) {
            System.out.println("  Score: " + score);
        }
    }

    /**
     * Demonstrates utility classes from the Standard Class Library: String and Math.
     */
    public static void demonstrateStringAndMathSCL() {
        // --- String Class Demonstration ---
        String original = "  Java is powerful and modern.  ";
        System.out.println("\n[SCL - String] Original: '" + original + "'");

        // Useful String methods
        String trimmed = original.trim();
        String upper = trimmed.toUpperCase();
        boolean contains = trimmed.contains("modern");
        int length = trimmed.length();

        System.out.println("  Trimmed & Upper: " + upper);
        System.out.println("  Length: " + length);
        System.out.println("  Contains 'modern': " + contains);
        System.out.println("  Substring (0 to 4): " + trimmed.substring(0, 4)); // "Java"

        // String formatting (similar to C/C++)
        System.out.printf("  Formatted Output: The word '%s' has %d characters.\n", upper, length);


        // --- Math Class Demonstration ---
        System.out.println("\n[SCL - Math] Demonstrations (all methods are static)");
        double base = 2.0;
        double exponent = 3.0;
        System.out.println("  Power (" + base + "^" + exponent + "): " + Math.pow(base, exponent)); // 8.0
        System.out.println("  Square Root of 25: " + Math.sqrt(25.0)); // 5.0
        System.out.println("  Random Number (0.0 to 1.0): " + Math.random());
        System.out.println("  Absolute Value of -10: " + Math.abs(-10));
    }

    /**
     * Demonstrates the modern date/time API (java.time).
     */
    public static void demonstrateDateTimeSCL() {
        // LocalDate: Represents a date (year, month, day) without time or timezone
        LocalDate today = LocalDate.now();
        LocalDate futureDate = today.plusDays(90);

        System.out.println("\n[SCL - java.time]");
        System.out.println("  Today's Date: " + today);
        System.out.println("  Today is a " + today.getDayOfWeek());
        System.out.println("  Date 90 days from now: " + futureDate);

        // Utility check
        boolean isLeap = today.isLeapYear();
        System.out.println("  Is " + today.getYear() + " a leap year? " + isLeap);
    }


    /**
     * Demonstrates Scanner for user input and the try-catch block for error handling.
     */
    public static void demonstrateInputAndErrorHandling() {
        // Use try-with-resources to ensure the Scanner is closed automatically
        try (Scanner scanner = new Scanner(System.in)) {
            System.out.print("\n[Input] Please enter an integer number: ");

            if (scanner.hasNextInt()) {
                int number = scanner.nextInt();
                System.out.println("  [Result] You entered: " + number);
                int result = performDivision(100, number);
                System.out.println("  [Result] 100 / " + number + " = " + result);

            } else {
                String input = scanner.next();
                System.out.println("  [Error] Input was not an integer: '" + input + "'");
                // Manually trigger division with zero for demonstration
                performDivision(100, 0); // This will deliberately cause an exception
            }
        } catch (Exception e) {
            // Catch Block: Executes if an exception is thrown in the try block
            System.err.println("\n[Error Handling] Caught an exception (e.g., if you entered 0 or a non-number):");
            System.err.println("  Exception Type: " + e.getClass().getName());
            System.err.println("  Error Message: " + e.getMessage());
        } finally {
            // Finally Block: ALWAYS executes, regardless of whether an exception occurred
            System.out.println("\n[Error Handling] Finally block executed. Cleanup or final logging complete.");
        }
    }

    /**
     * Simple static method that deliberately throws an ArithmeticException if denominator is 0.
     * @param numerator The top number.
     * @param denominator The bottom number.
     * @return The result of the division.
     */
    public static int performDivision(int numerator, int denominator) throws ArithmeticException {
        if (denominator == 0) {
            // Throws an unchecked exception (runtime exception)
            throw new ArithmeticException("Cannot divide by zero.");
        }
        return numerator / denominator;
    }

}


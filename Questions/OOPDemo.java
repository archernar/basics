// Abstract Class Definition
abstract class Shape {
    private String color;

    // Constructor for the abstract class
    public Shape(String color) {
        this.color = color;
    }

    // Abstract method: Must be implemented by concrete subclasses.
    // This enforces a contract: every Shape MUST know how to calculate its area.
    public abstract double getArea();

    // Concrete method: Can be used or overridden by subclasses.
    protected String getColor() {
        return "Color: " + color;
    }

    // Non-abstract method often used for display
    public void describe() {
        System.out.println("This is a " + color + " shape.");
    }
}

// Concrete Subclass 1: Inheritance and Polymorphism
class Circle extends Shape {
    private double radius;

    public Circle(double radius, String color) {
        // Calls the constructor of the base class (Shape)
        super(color);
        this.radius = radius;
    }

    // Method Overriding (Polymorphism): Implementing the abstract method
    @Override
    public double getArea() {
        // Math.PI comes from the Standard Class Library (SCL)
        return Math.PI * radius * radius;
    }

    // Overriding the concrete method from the base class for a specialized description
    @Override
    public void describe() {
        System.out.println("This is a circle with radius " + this.radius + " and " + getColor());
    }
}

// Concrete Subclass 2: Inheritance and Polymorphism
class Rectangle extends Shape {
    private double length;
    private double width;

    public Rectangle(double length, double width, String color) {
        super(color);
        this.length = length;
        this.width = width;
    }

    // Method Overriding (Polymorphism): Implementing the abstract method
    @Override
    public double getArea() {
        return length * width;
    }
    // Note: This class inherits the default describe() method from Shape.
}


/**
 * OOPDemo: A class dedicated to demonstrating core Object-Oriented
 * Programming (OOP) concepts in Java: Inheritance, Polymorphism, and Abstraction.
 *
 * This class serves as the main entry point to run the demo.
 */
public class OOPDemo {

    public static void main(String[] args) {
        System.out.println("=================================================");
        System.out.println("    Object-Oriented Programming (OOP) Demo       ");
        System.out.println("=================================================");
        System.out.println("1. Abstraction and Inheritance");

        // ---------------------------------------------------------------------
        // 1. Instantiation and Inheritance
        // We create instances of the concrete classes (Circle and Rectangle).
        // ---------------------------------------------------------------------

        Circle redCircle = new Circle(10.0, "Red");
        Rectangle blueRectangle = new Rectangle(5.0, 8.0, "Blue");

        redCircle.describe(); // Calls the overridden method in Circle
        blueRectangle.describe(); // Calls the concrete method in the abstract Shape class (inherited)

        // ---------------------------------------------------------------------
        // 2. Polymorphism (The Shape reference variable)
        // A reference variable of the superclass (Shape) can hold an object
        // of any of its subclasses (Circle or Rectangle).
        // ---------------------------------------------------------------------
        System.out.println("\n2. Polymorphism (Dynamic Method Dispatch)");

        // Declare a variable of the abstract type
        Shape shape1 = redCircle;     // Shape reference points to a Circle object
        Shape shape2 = blueRectangle; // Shape reference points to a Rectangle object

        // When getArea() is called, Java determines which implementation to use
        // at runtime based on the actual object type (Circle or Rectangle).
        System.out.printf("  Shape 1 (Circle) Area: %.2f\n", shape1.getArea());
        System.out.printf("  Shape 2 (Rectangle) Area: %.2f\n", shape2.getArea());
        System.out.println("  Shape 2 Color: " + shape2.getColor());


        // ---------------------------------------------------------------------
        // 3. Using an Array/List for Polymorphism
        // This is where Polymorphism is most powerful: treating different
        // objects uniformly.
        // ---------------------------------------------------------------------
        System.out.println("\n3. Polymorphic List Processing");

        Shape[] shapes = new Shape[2];
        shapes[0] = new Circle(3.0, "Green");
        shapes[1] = new Rectangle(4.0, 7.0, "Yellow");

        double totalArea = 0.0;
        for (Shape s : shapes) {
            // The compiler only knows 's' is a Shape, but the JVM calls the
            // correct subclass getArea() method.
            System.out.printf("  Processing %s. Area: %.2f\n", s.getColor(), s.getArea());
            totalArea += s.getArea();
        }

        System.out.printf("\n  Total area of all shapes in the list: %.2f\n", totalArea);
        System.out.println("-------------------------------------------------");
    }
}


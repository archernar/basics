/**
 * CollegeStudent.java
 *
 * This class represents a college student and is designed to introduce
 * fundamental concepts of object-oriented programming (OOP) to students
 * at a college level.
 *
 * CONCEPTS DEMONSTRATED:
 * 1.  Class and Object: This entire file defines a `CollegeStudent` class, which is a blueprint.
 * When we create a `new CollegeStudent(...)`, we are creating an object (an instance) of that class.
 *
 * 2.  Encapsulation: The class bundles data (instance variables) and the methods that operate on
 * that data together. The `private` access modifier restricts direct access to the variables
 * from outside the class, which is a core principle of encapsulation. Data should only be

 * changed through public methods.
 *
 * 3.  Instance Variables: `name`, `studentId`, `major`, and `gpa` are instance variables.
 * Each `CollegeStudent` object gets its own separate copy of these variables.
 *
 * 4.  Constructor: The `public CollegeStudent(...)` method is a special method called a constructor.
 * It's used to initialize the state of a new object when it is created. Notice it has no return type.
 *
 * 5.  The `this` keyword: Inside the constructor, `this.name` refers to the instance variable,
 * while `name` refers to the parameter being passed into the constructor. `this` is a reference
 * to the current object.
 *
 * 6.  Methods: `changeMajor`, `study`, and `getStudentInfo` define the behaviors of a `CollegeStudent` object.
 * They represent actions the object can perform or information it can provide.
 *
 * 7.  Static Members: `totalStudents` is a `static` variable, and `getTotalStudents()` is a `static` method.
 * Static members belong to the class itself, not to any individual object. There is only one copy
 * of `totalStudents`, which is shared across all `CollegeStudent` objects. This is useful for
 * tracking data related to the class as a whole.
 *
 * 8.  Main Method and Demonstration: The `main` method is the entry point for running this Java file.
 * Here, we create instances (objects) of our class and call their methods to show how they work.
 */
public class CollegeStudent {

    // --- INSTANCE VARIABLES ---
    // These belong to each individual object of the class.
    private String name;
    private String studentId;
    private String major;
    private double gpa;

    // --- STATIC VARIABLE ---
    // This is shared across all instances of the CollegeStudent class.
    private static int totalStudents = 0;

    /**
     * Constructor for the CollegeStudent class.
     * Initializes a new student object with the provided details.
     *
     * @param name The full name of the student.
     * @param studentId The unique ID number for the student.
     * @param major The student's primary field of study.
     */
    public CollegeStudent(String name, String studentId, String major) {
        this.name = name;
        this.studentId = studentId;
        this.major = major;
        this.gpa = 0.0; // Students start with a GPA of 0.0

        // Increment the static counter every time a new student is created.
        totalStudents++;
    }

    // --- INSTANCE METHODS ---
    // These methods are called on specific objects.

    /**
     * Simulates the student studying, which can improve their GPA.
     * @param hours The number of hours the student studied.
     */
    public void study(int hours) {
        System.out.println(this.name + " is studying " + this.major + " for " + hours + " hours.");
        // A simple formula to represent GPA improvement.
        // We'll cap the GPA at 4.0.
        this.gpa = Math.min(4.0, this.gpa + (hours * 0.05));
        System.out.println("Their new GPA is " + String.format("%.2f", this.gpa));
    }

    /**
     * Allows a student to change their major.
     * @param newMajor The new major the student is declaring.
     */
    public void changeMajor(String newMajor) {
        System.out.println(this.name + " is changing majors from " + this.major + " to " + newMajor + ".");
        this.major = newMajor;
    }

    /**
     * Returns a string containing all the information for a student.
     * @return A formatted string with student details.
     */
    public String getStudentInfo() {
        return "Student Name: " + this.name + "\n" +
               "ID: " + this.studentId + "\n" +
               "Major: " + this.major + "\n" +
               "GPA: " + String.format("%.2f", this.gpa);
    }

    // --- STATIC METHOD ---
    // This method is called on the class itself, not an instance.
    /**
     * Gets the total number of students created.
     * @return The value of the static totalStudents counter.
     */
    public static int getTotalStudents() {
        return totalStudents;
    }

    // --- MAIN METHOD ---
    // This is the entry point for the program. We can run this file directly.
    public static void main(String[] args) {
        // We can call static methods before any objects are created.
        System.out.println("Enrolling students...");
        System.out.println("Total students enrolled so far: " + CollegeStudent.getTotalStudents());
        System.out.println("------------------------------------");


        // Create two instances (objects) of the CollegeStudent class.
        CollegeStudent student1 = new CollegeStudent("Alice Johnson", "S12345", "Computer Science");
        CollegeStudent student2 = new CollegeStudent("Bob Williams", "S67890", "History");

        System.out.println("Created two new students.");
        System.out.println("Total students enrolled so far: " + CollegeStudent.getTotalStudents());
        System.out.println("------------------------------------");

        // Interact with the first student object.
        System.out.println("Details for the first student:");
        System.out.println(student1.getStudentInfo());
        System.out.println(); // for spacing

        student1.study(10); // Alice studies for 10 hours
        student1.changeMajor("Data Science");
        System.out.println("\nUpdated details for Alice:");
        System.out.println(student1.getStudentInfo());
        System.out.println("------------------------------------");

        // Interact with the second student object.
        System.out.println("Details for the second student:");
        System.out.println(student2.getStudentInfo());
        System.out.println(); // for spacing

        student2.study(20); // Bob studies for 20 hours
        System.out.println("\nUpdated details for Bob:");
        System.out.println(student2.getStudentInfo());
        System.out.println("------------------------------------");

        System.out.println("Final check on total students: " + CollegeStudent.getTotalStudents());
    }
}


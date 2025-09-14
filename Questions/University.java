import java.util.ArrayList;
import java.util.List;

/**
 * Person.java (Base Class / Superclass)
 *
 * This is the base class that contains properties and behaviors common
 * to all people at the university (e.g., students and professors).
 */
class Person {
    protected String name;
    protected int id;

    public Person(String name, int id) {
        this.name = name;
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public int getId() {
        return id;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Name: " + name;
    }
}


/**
 * Student.java (Derived Class / Subclass)
 *
 * This class `extends` Person. It "is-a" Person, so it inherits all of
 * Person's fields and methods, and adds its own specific ones.
 */
class Student extends Person {
    private String major;

    public Student(String name, int id, String major) {
        // The `super()` call invokes the constructor of the parent class (Person).
        // It MUST be the first line in the constructor.
        super(name, id);
        this.major = major;
    }

    // A method specific to Students
    public void study() {
        System.out.println(this.name + " is studying for their " + this.major + " major.");
    }

    // We override the parent's toString() method to provide more specific information.
    @Override
    public String toString() {
        return super.toString() + ", Major: " + this.major;
    }
}


/**
 * Professor.java (Derived Class / Subclass)
 *
 * This class also `extends` Person. It inherits the common attributes
 * and adds details specific to a professor.
 */
class Professor extends Person {
    private String department;

    public Professor(String name, int id, String department) {
        super(name, id);
        this.department = department;
    }

    // A method specific to Professors
    public void giveLecture() {
        System.out.println("Professor " + this.name + " is giving a lecture for the " + this.department + " department.");
    }

    @Override
    public String toString() {
        return super.toString() + ", Department: " + this.department;
    }
}


/**
 * University.java
 *
 * This class demonstrates how the other classes work together.
 *
 * CONCEPTS DEMONSTRATED:
 * 1.  Inheritance: `Student` and `Professor` inherit from `Person`, reusing code and
 * establishing an "is-a" relationship.
 *
 * 2.  The `super` Keyword: Used to call the parent class's constructor and methods,
 * allowing subclasses to extend, rather than replace, parent functionality.
 *
 * 3.  Method Overriding: `Student` and `Professor` provide their own versions of the
 * `toString()` method. The `@Override` annotation is used to indicate this.
 *
 * 4.  Polymorphism: The `roster` is a `List<Person>`, but it can hold objects of
 * any subclass of Person (i.e., `Student` and `Professor`). When we iterate through
 * the list and call a method like `toString()`, Java automatically calls the
 * correct version for each object's actual type. This is polymorphism in action.
 *
 * 5.  The `instanceof` Operator: This is used to check the actual type of an object at
 * runtime. This allows us to safely cast the object to its specific subclass
 * and call subclass-specific methods (like `study()` or `giveLecture()`).
 */
public class University {
    private String universityName;
    private List<Person> roster; // This list demonstrates polymorphism.

    public University(String name) {
        this.universityName = name;
        this.roster = new ArrayList<>();
    }

    public void addPerson(Person person) {
        roster.add(person);
    }

    public void printRoster() {
        System.out.println("\n--- Roster for " + this.universityName + " ---");
        for (Person person : roster) {
            // Polymorphism: Java calls the correct toString() for each object.
            System.out.println(person);
        }
        System.out.println("----------------------------------------");
    }

    public void startDay() {
        System.out.println("\n--- A Day at the University ---");
        for (Person person : roster) {
            // Use `instanceof` to check the object's true type
            if (person instanceof Student) {
                // Cast the Person object to a Student object to access student methods
                Student student = (Student) person;
                student.study();
            } else if (person instanceof Professor) {
                // Cast to Professor to access professor methods
                Professor professor = (Professor) person;
                professor.giveLecture();
            }
        }
        System.out.println("---------------------------------");
    }


    // --- MAIN METHOD ---
    public static void main(String[] args) {
        University msu = new University("Montclair State University");

        // Create instances of subclasses
        Person student1 = new Student("Alice Johnson", 101, "Computer Science");
        Person student2 = new Student("Bob Williams", 102, "Biology");
        Person prof1 = new Professor("Dr. Evelyn Reed", 501, "Computer Science");
        Person prof2 = new Professor("Dr. Charles Davis", 502, "Physics");

        // Add them all to the same list of type Person
        msu.addPerson(student1);
        msu.addPerson(prof1);
        msu.addPerson(student2);
        msu.addPerson(prof2);

        // Print the roster. Note how each object prints differently.
        msu.printRoster();

        // Demonstrate calling type-specific methods.
        msu.startDay();
    }
}


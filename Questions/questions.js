document.addEventListener('DOMContentLoaded', function() {
        // Your code here will run after the DOM is ready.
        console.log('DOM fully loaded and parsed');
        // The entire content of the Java code editor page is stored in this template literal.
        const editorPageContent1 = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Java Code Editor</title>
                <script src="https://cdn.tailwindcss.com"><\/script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.css">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/theme/dracula.min.css">
                <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/codemirror.min.js"><\/script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.65.5/mode/clike/clike.min.js"><\/script>
                <style>
                    body { font-family: 'Inter', sans-serif; }
                    .CodeMirror { height: calc(100vh - 220px); border-radius: 0.5rem; font-size: 1rem; }
                </style>
                <link rel="preconnect" href="https://fonts.googleapis.com">
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
            </head>
            <body class="bg-gray-900 text-white antialiased">
                <div class="container mx-auto p-4">
                    <main class="bg-gray-800 rounded-lg shadow-2xl p-6">
                        <div class="mb-4">
                            <label for="java-code" class="block text-lg font-medium text-gray-300 mb-2">Java Code</label>
                            <textarea id="java-code" name="java-code">
        `;

        const editorPageContent2 = `
                            <\/textarea>
                        </div>
                        <div class="flex items-center justify-end space-x-4 mb-4">
                            <!-- button id="gmail-button" class="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.5v15c0 .825-.675 1.5-1.5 1.5H1.5C.675 21 0 20.325 0 19.5v-15C0 3.675.675 3 1.5 3h21C23.325 3 24 3.675 24 4.5zm-1.5-1.5L12 12 1.5 3h21zm-21 15h21v-12l-10.5 7.5L0 6v12z"/></svg>
                                <span>Email Code</span>
                            </button -->
                            <!-- button id="copy-button" class="px-5 py-2.5 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-500">Copy Code</button -->
                            <!-- button id="run-button" class="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-cyan-400">Run Code</button -->
                        </div>
                        <!-- div>
                            <label for="output" class="block text-lg font-medium text-gray-300 mb-2">Output</label>
                            <pre id="output" class="bg-gray-900 text-gray-300 p-4 rounded-lg h-24 overflow-y-auto text-sm font-mono whitespace-pre-wrap">Click "Run Code" to see the output here...<\/pre>
                        </div -->
                    </main>
                </div>
                <div id="message-box" class="fixed bottom-5 right-5 bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg text-sm opacity-0 transition-opacity duration-300">Code copied to clipboard!</div>
                <script>
                    const editor = CodeMirror.fromTextArea(document.getElementById("java-code"), {
                        lineNumbers: true, mode: "text/x-java", theme: "dracula", matchBrackets: true, autoCloseBrackets: true, indentUnit: 4
                    });
                    const runButton = document.getElementById('run-button');
                    const copyButton = document.getElementById('copy-button');
                    const gmailButton = document.getElementById('gmail-button');
                    const outputArea = document.getElementById('output');
                    const messageBox = document.getElementById('message-box');

                    runButton.addEventListener('click', () => {
                        outputArea.textContent = 'Compiling and running code...\\n\\n';
                        setTimeout(() => { outputArea.textContent += 'Hello, World!\\n'; }, 1000);
                    });
                    
                    copyButton.addEventListener('click', () => {
                        const codeToCopy = editor.getValue();
                        const tempTextArea = document.createElement('textarea');
                        tempTextArea.value = codeToCopy;
                        document.body.appendChild(tempTextArea);
                        tempTextArea.select();
                        try {
                            document.execCommand('copy');
                            showMessage('Code copied to clipboard!');
                        } catch (err) {
                            showMessage('Failed to copy code.', true);
                        }
                        document.body.removeChild(tempTextArea);
                    });

                    gmailButton.addEventListener('click', () => {
                        const code = editor.getValue();
                        const subject = "Java Code Snippet";
                        const body = \`Here is the Java code I was working on:\\n\\n---\\n\\n\${code}\`;
                        const mailtoLink = \`mailto:?subject=\${encodeURIComponent(subject)}&body=\${encodeURIComponent(body)}\`;
                        window.location.href = mailtoLink;

                    });
                    
                    function showMessage(message, isError = false) {
                        messageBox.textContent = message;
                        messageBox.className = \`fixed bottom-5 right-5 text-white py-2 px-4 rounded-lg shadow-lg text-sm transition-opacity duration-300 \${isError ? 'bg-red-500' : 'bg-green-500'}\`;
                        messageBox.classList.remove('opacity-0');
                        setTimeout(() => { messageBox.classList.add('opacity-0'); }, 3000);
                    }
                <\/script>
            </body>
            </html>
        `;

const editorPageContentCode1 = `
/**
 * A template class for a simple Java program.
 * This class demonstrates basic Java syntax including variable declaration,
 * user input, method calls, and conditional logic.
 *
 * @author [Your Name]
 * @version 1.0
 * @since [Date]
 */
import java.util.Scanner; // Import the Scanner class to read user input

public class LearningTemplate {

    /**
     * The main method is the entry point of the application.
     * Execution starts here.
     * @param args Command line arguments (not used in this example).
     */
    public static void main(String[] args) {
        // --- 1. VARIABLE DECLARATION ---
        // Primitive data types for storing simple values.
        String studentName = "Alex"; // Stores text
        int studentAge = 20;         // Stores whole numbers
        double courseGrade = 88.5;   // Stores decimal numbers
        boolean isEnrolled = true;   // Stores true or false

        // --- 2. USER INPUT ---
        // Create a Scanner object to read input from the console.
        Scanner inputReader = new Scanner(System.in);

        System.out.print("Please enter your favorite number: ");
        int favoriteNumber = inputReader.nextInt(); // Read an integer from the user

        // --- 3. OUTPUT AND METHOD CALL ---
        // Print the stored information to the console.
        System.out.println("Hello, " + studentName + "!");
        System.out.println("Your favorite number is: " + favoriteNumber);

        // Call a separate method to perform a specific task.
        checkNumber(favoriteNumber);

        // --- 4. CLEANUP ---
        // It's good practice to close the scanner when you're done with it.
        inputReader.close();
    }

    /**
     * A simple method to check if a number is even or odd.
     * This demonstrates how to create and use methods outside of main.
     * @param number The integer to check.
     */
    public static void checkNumber(int number) {
        // --- 5. CONDITIONAL LOGIC ---
        // Use an if-else statement to make a decision.
        // The '%' (modulo) operator gives the remainder of a division.
        if (number % 2 == 0) {
            System.out.println(number + " is an even number.");
        } else {
            System.out.println(number + " is an odd number.");
        }
    }
}
`;


const editorPageContentCode2 = `
import java.util.Objects;

/**
 * An advanced template demonstrating a well-structured Java class.
 * This file defines a 'Student' class and a 'School' class to run it.
 * It covers essential Object-Oriented Programming (OOP) concepts.
 *
 * @author [Your Name]
 * @version 2.0
 * @since [Date]
 */

/**
 * The Student class models a student with an ID, name, and GPA.
 * It implements the 'Comparable' interface to allow for sorting.
 */
class Student implements Comparable<Student> {

    // --- 1. FIELDS (INSTANCE VARIABLES) ---
    // These are the properties of a Student. They are 'private' to enforce
    // encapsulation, meaning they can only be accessed through methods (getters/setters).
    private int studentId;
    private String name;
    private double gpa;

    // --- 2. CONSTRUCTORS ---
    // Constructors are special methods used to create and initialize objects.

    /**
     * No-argument (or default) constructor.
     * Initializes a Student object with default values.
     */
    public Student() {
        this.studentId = 0;
        this.name = "Unknown";
        this.gpa = 0.0;
    }

    /**
     * Parameterized constructor.
     * Initializes a Student object with the provided values.
     * @param studentId The student's unique ID.
     * @param name The student's name.
     * @param gpa The student's Grade Point Average.
     */
    public Student(int studentId, String name, double gpa) {
        this.studentId = studentId;
        this.name = name;
        this.gpa = gpa;
    }

    // --- 3. GETTERS AND SETTERS (ACCESSOR AND MUTATOR METHODS) ---
    // Getters return the value of a private field.
    // Setters update the value of a private field.

    public int getStudentId() {
        return this.studentId;
    }

    public String getName() {
        return this.name;
    }

    public double getGpa() {
        return this.gpa;
    }

    public void setName(String name) {
        // We can add validation logic here.
        if (name != null && !name.trim().isEmpty()) {
            this.name = name;
        }
    }

    public void setGpa(double gpa) {
        // Example validation: GPA should be between 0.0 and 4.0.
        if (gpa >= 0.0 && gpa <= 4.0) {
            this.gpa = gpa;
        }
    }

    // --- 4. OBJECT COMPARISON METHODS ---

    /**
     * The compareTo method defines the "natural ordering" of Student objects.
     * Here, we define it as sorting by studentId.
     * @param other The other Student object to compare against.
     * @return A negative integer, zero, or a positive integer as this object
     * is less than, equal to, or greater than the specified object.
     */
    @Override
    public int compareTo(Student other) {
        // Integer.compare is a safe way to compare int primitives.
        return Integer.compare(this.studentId, other.studentId);
    }

    /**
     * The equals method checks if two Student objects are "equal".
     * We define equality by a matching studentId.
     * @param obj The object to compare with.
     * @return true if the objects are equal, false otherwise.
     */
    @Override
    public boolean equals(Object obj) {
        // 1. Check if the object is being compared to itself.
        if (this == obj) return true;
        // 2. Check if the other object is null or of a different class.
        if (obj == null || getClass() != obj.getClass()) return false;
        // 3. Cast the object to a Student and compare the relevant fields.
        Student student = (Student) obj;
        return this.studentId == student.studentId;
    }

    /**
     * The hashCode method returns a hash code value for the object.
     * It's a rule: if you override equals(), you MUST override hashCode().
     * The hash code should be based on the same fields used in equals().
     * @return A hash code value for this object.
     */
    @Override
    public int hashCode() {
        return Objects.hash(studentId);
    }

    // --- 5. UTILITY METHOD ---

    /**
     * The toString method provides a string representation of the object.
     * This is useful for printing the object's state.
     * @return A string describing the student.
     */
    @Override
    public String toString() {
        return "Student[ID=" + studentId + ", Name='" + name + "', GPA=" + gpa + "]";
    }
}

/**
 * A class to demonstrate the usage of the Student class.
 */
public class School {
    public static void main(String[] args) {
        // Create student objects using the constructors
        Student student1 = new Student(101, "Alice", 3.8);
        Student student2 = new Student(102, "Bob", 3.5);
        Student student3 = new Student(101, "Alice Smith", 3.9); // Same ID as student1

        // Use getters to access data
        System.out.println("Student 1's Name: " + student1.getName());

        // Use setters to modify data
        student2.setGpa(3.6);
        System.out.println("Student 2's new GPA: " + student2.getGpa());

        // The toString() method is called automatically by println
        System.out.println(student1);
        System.out.println(student2);

        System.out.println("\n--- Comparing Students ---");

        // Use the equals() method
        System.out.println("Is student1 equal to student2? " + student1.equals(student2)); // false
        System.out.println("Is student1 equal to student3? " + student1.equals(student3)); // true (based on ID)

        // Use the compareTo() method
        System.out.println("Comparing student1 to student2: " + student1.compareTo(student2)); // -1 (101 < 102)
    }
}
`;

        // Event listener for the launch button
        document.getElementById('open-editor-btn').addEventListener('click', () => {
            // Define properties for the popup window was 900 750
            // // Get the viewport's width and height
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;

            // Calculate 85% of the dimensions
            const targetWidth = viewportWidth * 0.85;
            const targetHeight = viewportHeight * 0.85;

            // Log the results to the console
            console.log(`Viewport Width: ${viewportWidth}px, Target Width (85%): ${targetWidth.toFixed(2)}px`);
            console.log(`Viewport Height: ${viewportHeight}px, Target Height (85%): ${targetHeight.toFixed(2)}px`);

            const popupWidth = targetWidth;
            const popupHeight = targetHeight;

            const left = (screen.width / 2) - (popupWidth / 2);
            const top = (screen.height / 2) - (popupHeight / 2);

            // Open a new window
            const popup = window.open('', 'JavaCodeEditor', `width=${popupWidth},height=${popupHeight},top=${top},left=${left}`);

            // Write the stored HTML content into the new window
            popup.document.open();
            popup.document.write(editorPageContent1 + editorPageContentCode2 + editorPageContent2);
            popup.document.close();
        });
});




        // This script uses plain JavaScript for maximum reliability.
        document.addEventListener('DOMContentLoaded', function() {
            const navLinks = document.querySelectorAll('.nav-link');
            const contentSections = document.querySelectorAll('.content-section');

            function showSection(targetId) {
                // Hide all content sections
                contentSections.forEach(section => {
                    section.style.display = 'none';
                });

                // Remove 'active' class from all navigation links
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });

                // Show the target section
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.style.display = 'block';
                }

                // Add 'active' class to the corresponding link
                const activeLink = document.querySelector(`.nav-link[data-target="${targetId}"]`);
                if (activeLink) {
                    activeLink.classList.add('active');
                }
            }

            // Set up click events for all navigation links
            navLinks.forEach(link => {
                link.addEventListener('click', function(event) {
                    event.preventDefault();
                    const targetId = this.getAttribute('data-target');
                    showSection(targetId);
                });
            });

            // Show the first section by default when the page loads.
            showSection('intro');
        });


        // --- COOKIE HELPER FUNCTIONS (Unchanged) ---

        /**
         * Sets a cookie with a given name, value, and expiration in days.
         * @param {string} name - The name of the cookie.
         * @param {string} value - The value to store in the cookie.
         * @param {number} days - The number of days until the cookie expires.
         */
        function setCookie(name, value, days) {
            let expires = "";
            if (days) {
                const date = new Date();
                date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax";
        }

        /**
         * Retrieves the value of a cookie by its name.
         * @param {string} name - The name of the cookie to retrieve.
         * @returns {string|null} The cookie's value, or null if not found.
         */
        function getCookie(name) {
            const nameEQ = name + "=";
            const ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) === ' ') {
                    c = c.substring(1, c.length);
                }
                if (c.indexOf(nameEQ) === 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
            return null;
        }

        // --- REFACTORED MAIN LOGIC ---

        // Wait for the DOM to be fully loaded before running the script
        document.addEventListener('DOMContentLoaded', () => {
            // Select all checkboxes that should have their state saved
            const savableCheckboxes = document.querySelectorAll('.savable-checkbox');

            // Iterate over each of these checkboxes
            savableCheckboxes.forEach(checkbox => {
                // Use the checkbox's 'name' attribute as its unique cookie key
                const cookieName = checkbox.name;

                // 1. LOAD the saved state for this specific checkbox
                const savedState = getCookie(cookieName);
                if (savedState !== null) {
                    // Set the checkbox state based on the cookie's string value
                    checkbox.checked = (savedState === 'true');
                }

                // 2. SAVE the state whenever this specific checkbox is changed
                checkbox.addEventListener('change', () => {
                    const isChecked = checkbox.checked;
                    // Save the current state to a cookie named after the checkbox
                    setCookie(cookieName, isChecked, 7); // Cookie expires in 7 days
                    console.log(`Saved state for '${cookieName}': ${isChecked}`);
                });
            });
        });

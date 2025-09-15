import java.util.ArrayList;
import java.util.List;

/**
 * Book.java
 *
 * A simple helper class to represent a single book.
 * A Library object will be composed of many Book objects.
 */
class Book {
    private String title;
    private String author;
    private boolean isAvailable;

    public Book(String title, String author) {
        this.title = title;
        this.author = author;
        this.isAvailable = true; // A new book is always available initially.
    }

    // --- Getters ---
    public String getTitle() {
        return title;
    }

    public String getAuthor() {
        return author;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    // --- Methods to change the book's state ---
    public void checkOut() {
        this.isAvailable = false;
    }

    public void returnBook() {
        this.isAvailable = true;
    }

    @Override
    public String toString() {
        String status = isAvailable ? "Available" : "Checked Out";
        return "'" + title + "' by " + author + " [" + status + "]";
    }
}


/**
 * Library.java
 *
 * This class models a library and demonstrates more advanced concepts like
 * object composition and managing a collection of objects.
 *
 * CONCEPTS DEMONSTRATED:
 * 1.  Object Composition: The Library class has an `ArrayList<Book>`. This is a "has-a"
 * relationship. The Library is not a Book, but it *has* a collection of Books.
 * This is a more common and powerful design than inheritance for many real-world scenarios.
 *
 * 2.  Managing Collections: The `catalog` is an `ArrayList`, a dynamic collection of objects.
 * The methods of the Library class are designed to manage this collection by adding,
 * searching, and modifying the objects within it.
 *
 * 3.  Interaction Between Objects: The Library's methods (`checkOutBook`, `returnBook`)
 * call methods on the Book objects within its catalog (`book.checkOut()`, `book.returnBook()`).
 * This shows how different objects collaborate to accomplish a task.
 *
 * 4.  Encapsulation of Complexity: A user of the Library class doesn't need to know how the
 * books are stored (e.g., in an ArrayList). They just use the public methods like `addBook`
 * and `findBook`. The internal complexity is hidden.
 *
 * 5.  Searching and Iteration: The `findBook`, `checkOutBook`, and `listAvailableBooks`
 * methods demonstrate how to iterate through a collection to find specific objects or
 * information.
 */
public class Library {

    // --- INSTANCE VARIABLES ---
    private String name;
    private List<Book> catalog; // Composition: The Library "has-a" list of Books.

    /**
     * Constructor for the Library class.
     * @param name The name of the library (e.g., "City Central Library").
     */
    public Library(String name) {
        this.name = name;
        this.catalog = new ArrayList<>(); // Initialize the collection.
        System.out.println(this.name + " is now open for service!");
    }

    // --- INSTANCE METHODS ---

    /**
     * Adds a new Book object to the library's catalog.
     * @param book The Book object to add.
     */
    public void addBook(Book book) {
        this.catalog.add(book);
        System.out.println("Added to catalog: " + book.getTitle());
    }


    /**
     * Finds a book in the catalog by its title (case-insensitive search).
     * @param title The title of the book to search for.
     * @return The Book object if found, otherwise null.
     */
    private Book findBook(String title) {
        for (Book book : this.catalog) {
            if (book.getTitle().equalsIgnoreCase(title)) {
                return book;
            }
        }
        return null; // Return null if no book with that title exists.
    }


    /**
     * Checks out a book, making it unavailable.
     * @param title The title of the book to check out.
     */
    public void checkOutBook(String title) {
        Book book = findBook(title);
        if (book != null) {
            if (book.isAvailable()) {
                book.checkOut();
                System.out.println("Successfully checked out '" + title + "'.");
            } else {
                System.out.println("Sorry, '" + title + "' is already checked out.");
            }
        } else {
            System.out.println("Sorry, we don't have a book titled '" + title + "'.");
        }
    }


    /**
     * Returns a book, making it available again.
     * @param title The title of the book to return.
     */
    public void returnBook(String title) {
        Book book = findBook(title);
        if (book != null) {
            if (!book.isAvailable()) {
                book.returnBook();
                System.out.println("Thank you for returning '" + title + "'.");
            } else {
                System.out.println("Error: This book was never checked out.");
            }
        } else {
            System.out.println("Error: Cannot return a book we don't own.");
        }
    }


    /**
     * Prints a list of all currently available books in the catalog.
     */
    public void listAvailableBooks() {
        System.out.println("\n--- Books Currently Available at " + this.name + " ---");
        int availableCount = 0;
        for (Book book : this.catalog) {
            if (book.isAvailable()) {
                System.out.println(" - " + book);
                availableCount++;
            }
        }
        if (availableCount == 0) {
            System.out.println("No books are currently available.");
        }
        System.out.println("-------------------------------------------------");
    }


    // --- MAIN METHOD ---
    public static void main(String[] args) {
        Library mainLibrary = new Library("Montclair Public Library");
        System.out.println("------------------------------------");

        // Create Book objects and add them to the library's catalog
        mainLibrary.addBook(new Book("The Great Gatsby", "F. Scott Fitzgerald"));
        mainLibrary.addBook(new Book("To Kill a Mockingbird", "Harper Lee"));
        mainLibrary.addBook(new Book("1984", "George Orwell"));
        mainLibrary.addBook(new Book("Dune", "Frank Herbert"));
        System.out.println("------------------------------------");

        mainLibrary.listAvailableBooks();

        // Perform some library operations
        System.out.println("\n--- Patron Transactions ---");
        mainLibrary.checkOutBook("1984");
        mainLibrary.checkOutBook("The Hobbit"); // Book not in catalog
        mainLibrary.checkOutBook("1984"); // Already checked out
        mainLibrary.returnBook("Dune");   // Was never checked out
        mainLibrary.checkOutBook("dune"); // Case-insensitive check
        System.out.println("---------------------------");

        mainLibrary.listAvailableBooks();

        System.out.println("\n--- Patron Transactions ---");
        mainLibrary.returnBook("1984");
        System.out.println("---------------------------");

        mainLibrary.listAvailableBooks();
    }
}


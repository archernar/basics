/**
 * BankAccount.java
 *
 * This class represents a simple bank account to demonstrate core
 * object-oriented programming (OOP) concepts.
 *
 * CONCEPTS DEMONSTRATED:
 * 1.  Class/Object: The `BankAccount` class is a blueprint for creating bank account objects.
 *
 * 2.  Encapsulation: Data like `balance` is kept `private` and can only be modified
 * through public methods (`deposit`, `withdraw`), which contain important logic
 * to protect the data's integrity (e.g., preventing a negative balance).
 *
 * 3.  Method Overloading: This class has two constructors. This is called overloading.
 * Java knows which one to call based on the arguments you provide when creating an object.
 * This provides flexible ways to create objects.
 *
 * 4.  Methods with Return Values: The `withdraw` method returns a `boolean` to
 * indicate if the transaction was successful. This is a common pattern for methods
 * that can either succeed or fail.
 *
 * 5.  Static Members for Shared Data: The `interestRate` is `static` because it's a
 * property of the bank itself, not of any single account. All accounts share the same
 * interest rate. A static method `setInterestRate` modifies this class-level variable.
 *
 * 6.  Business Logic: The methods enforce rules. For example, you cannot deposit a
 * negative amount, and you cannot withdraw more money than you have in the account.
 * This is a key part of writing useful and robust classes.
 *
 * 7.  The `toString()` Method: This is a special built-in Java method that we are
 * overriding. It's automatically called when you try to print an object, providing a
 * clean, readable string representation of the object's state.
 */
public class BankAccount {

    // --- INSTANCE VARIABLES ---
    private String accountNumber;
    private String accountHolderName;
    private double balance;

    // --- STATIC VARIABLE ---
    // This is shared by all BankAccount objects. It represents a bank-wide value.
    private static double interestRate = 0.01; // 1% default interest rate

    /**
     * Constructor #1: Creates a new bank account with a zero balance.
     *
     * @param accountNumber The unique number for this account.
     * @param accountHolderName The name of the person who owns the account.
     */
    public BankAccount(String accountNumber, String accountHolderName) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = 0.0;
        System.out.println("New account created for " + accountHolderName + " with account number " + accountNumber + ".");
    }

    /**
     * Constructor #2 (Overloaded): Creates a new bank account with an initial deposit.
     *
     * @param accountNumber The unique number for this account.
     * @param accountHolderName The name of the person who owns the account.
     * @param initialDeposit The starting amount of money in the account.
     */
    public BankAccount(String accountNumber, String accountHolderName, double initialDeposit) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        // It's good practice to reuse your own methods to avoid duplicating logic.
        if (initialDeposit > 0) {
            this.balance = initialDeposit;
        } else {
            this.balance = 0.0;
        }
        System.out.println("New account created for " + accountHolderName + " with an initial deposit of $" + String.format("%.2f", this.balance) + ".");
    }

    // --- INSTANCE METHODS ---

    /**
     * Adds money to the account.
     * The deposit amount must be positive.
     * @param amount The amount to deposit.
     */
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Deposited $" + String.format("%.2f", amount) + ". New balance: $" + String.format("%.2f", this.balance));
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }

    /**
     * Withdraws money from the account.
     * The amount must be positive and cannot exceed the current balance.
     * @param amount The amount to withdraw.
     * @return true if the withdrawal was successful, false otherwise.
     */
    public boolean withdraw(double amount) {
        if (amount <= 0) {
            System.out.println("Withdrawal amount must be positive.");
            return false;
        }

        if (amount <= this.balance) {
            this.balance -= amount;
            System.out.println("Withdrew $" + String.format("%.2f", amount) + ". New balance: $" + String.format("%.2f", this.balance));
            return true;
        } else {
            System.out.println("Withdrawal failed. Insufficient funds. You tried to withdraw $" + String.format("%.2f", amount) + " but only have $" + String.format("%.2f", this.balance) + ".");
            return false;
        }
    }

    /**
     * Applies interest to the account based on the static interest rate.
     */
    public void applyInterest() {
        double interestGained = this.balance * interestRate;
        this.balance += interestGained;
        System.out.println("Applied " + (interestRate * 100) + "% interest. Interest gained: $" + String.format("%.2f", interestGained) + ". New balance: $" + String.format("%.2f", this.balance));
    }

    /**
     * Overriding the default toString method to provide a custom string representation.
     * @return A formatted string with the account details.
     */
    @Override
    public String toString() {
        return "Account Details:\n" +
               "  Holder: " + this.accountHolderName + "\n" +
               "  Account#: " + this.accountNumber + "\n" +
               "  Balance: $" + String.format("%.2f", this.balance);
    }


    // --- STATIC METHOD ---
    /**
     * Sets the interest rate for all accounts.
     * @param newRate The new bank-wide interest rate (e.g., 0.05 for 5%).
     */
    public static void setInterestRate(double newRate) {
        interestRate = newRate;
        System.out.println("BANK-WIDE UPDATE: Interest rate changed to " + (newRate * 100) + "%.");
    }


    // --- MAIN METHOD ---
    public static void main(String[] args) {
        System.out.println("Welcome to the Simple Bank!");
        System.out.println("------------------------------------");

        // Create accounts using both constructors
        BankAccount acc1 = new BankAccount("112233", "Charlie Davis");
        BankAccount acc2 = new BankAccount("445566", "Diana Smith", 500.00);
        System.out.println("------------------------------------");

        // Interact with the first account
        System.out.println(acc1);
        acc1.deposit(250.75);
        acc1.withdraw(100.00);
        acc1.withdraw(200.00); // This will fail
        System.out.println("------------------------------------");

        // Interact with the second account
        System.out.println(acc2);
        acc2.withdraw(200.00);
        System.out.println("------------------------------------");

        // Demonstrate static method
        acc1.applyInterest();
        acc2.applyInterest();
        System.out.println();

        BankAccount.setInterestRate(0.05); // Change rate to 5% for all accounts
        System.out.println();

        acc1.applyInterest();
        acc2.applyInterest();
        System.out.println("------------------------------------");

        System.out.println("Final Account States:");
        System.out.println(acc1);
        System.out.println();
        System.out.println(acc2);
    }
}


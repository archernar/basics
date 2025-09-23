## Java Exercises 
### Vending Machine and Wallet 

    Create two classes: `Wallet` and `VendingMachine`. The `Wallet` class should have 
    an instance variable for the amount of money it contains and methods to `addMoney` 
    and `spendMoney`. The `spendMoney` method should only succeed if there are sufficient 
    funds. The `VendingMachine` class should have an instance variable for 
    the cost of an item. It must have a method `purchaseItem(Wallet userWallet)` that 
    attempts to dispense an item. This method should call the `spendMoney` method 
    on the `userWallet` object passed to it. In your main method, create a `Wallet` 
    object and a `VendingMachine` object, and simulate a user attempting to buy an 
    item. 
    
    

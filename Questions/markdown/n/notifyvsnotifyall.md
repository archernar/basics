## Java Exercises 
### 'notify()' vs. 'notifyAll()' 

    Create a scenario with one producer and three consumer threads waiting on the same 
    lock. First, use 'notify()' in the producer. Observe that only one consumer wakes 
    up. Then, change it to 'notifyAll()' and observe that all consumers wake up 
    (though only one will get the lock). 
    
    

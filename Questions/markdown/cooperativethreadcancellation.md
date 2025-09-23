## Java Exercises 
### Cooperative Thread Cancellation 

    Implement a thread that runs a long loop (e.g., 'while (!Thread.currentThread().isInterrupted())'). 
    The main thread should let it run for a while and then call 'interrupt()'. 
    The loop should terminate gracefully because its condition checks 
    the interrupted status. 
    
    

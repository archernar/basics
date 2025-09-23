## Java Exercises 
### Completing a Future Manually 

    Create a 'CompletableFuture' and pass it to a worker thread. The worker thread performs 
    a calculation and then completes the future using 'future.complete(result)'. 
    The main thread can then get the result without needing to 'join()' the worker 
    thread directly. 
    
    

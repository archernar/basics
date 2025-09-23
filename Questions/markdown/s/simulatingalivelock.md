## Java Exercises 
### Simulating a Livelock 

    Create a scenario with two threads that are overly polite. Thread A needs a resource 
    held by B, and B needs a resource held by A. Both threads try to acquire the 
    other's lock, but if they fail, they release their own lock and try again. They 
    are active but make no progress. 
    
    

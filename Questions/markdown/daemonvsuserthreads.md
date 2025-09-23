## Java Exercises 
### Daemon vs. User Threads 

    Create a 'worker' thread that runs an infinite loop. In 'main', start this thread. 
    Observe that the program never exits. Now, call 'worker.setDaemon(true)' before 
    starting it. Observe that the JVM now exits even though the worker is still 'running'. 
    
    
    

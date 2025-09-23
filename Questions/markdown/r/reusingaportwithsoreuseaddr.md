## Java Exercises 
### Reusing a Port with SO_REUSEADDR 

    Create a server socket and close it. Immediately try to create another server socket 
    on the same port. Handle the 'BindException' that may occur. Then, enable 'serverSocket.setReuseAddress(true)' 
    and show that the second bind is successful. 
    
    
    

## Java Exercises 
### Server-Side Idle Client Timeout 

    Implement a server that sets 'SO_TIMEOUT' on each client socket it accepts. If a 
    client is connected but sends no data for a specified period, the server should 
    catch the 'SocketTimeoutException' and close the connection. 
    
    

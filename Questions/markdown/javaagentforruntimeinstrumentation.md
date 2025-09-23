## Java Exercises 
### Java Agent for Runtime Instrumentation 

    Write a simple Java agent using the 'java.lang.instrument' package. The agent, when 
    attached to a running JVM via the '-javaagent' flag, should use a library like 
    ASM or ByteBuddy to instrument a specific method (e.g., 'javax.swing.JButton.setText') 
    to log its calls. 
    
    

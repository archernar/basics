## Java Exercises 
### Implement a Cache with Soft References 

    Build a memory-sensitive cache using a 'Map&ltKey, SoftReference&ltValue&gt&gt'. 
    This cache should hold onto objects as long as memory is plentiful, but the garbage 
    collector is free to clear the references (and thus the cached data) when the 
    heap is under pressure. 
    
    

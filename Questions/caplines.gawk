# GAWK script to ensure the first character of each line is uppercase.
# Usage: gawk -f capitalize.gawk your_input_file.txt

{
    # Check if the line is not empty to avoid errors.
    if (length($0) > 0) {
        # Extract the first character.
        first_char = substr($0, 1, 1);
        
        # Extract the rest of the line starting from the second character.
        rest_of_line = substr($0, 2);
        
        # Convert the first character to uppercase and concatenate it
        # with the rest of the line.
        print toupper(first_char) rest_of_line;
    } else {
        # If the line is empty, just print it as is.
        print $0;
    }
}


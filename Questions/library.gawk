
function openHTMLFile(fn,       fout) {
    fout=fn
    gsub(/[^[:alnum:]]/, "", fout)
    fout=tolower("./pages/" "" fout ".html")
    print "<!DOCTYPE html>" >> fout
    print "<html lang='en;>" >> fout
    print "<head>" >> fout
    print "<meta charset="UTF-8">" >> fout
    print "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" >> fout
    print "<title></title>" >> fout
    print "</head>" >> fout
    print "<style>" >> fout
    print "body {" >> fout
    print "xxxxfont-family: 'Inter', sans-serif;" >> fout
    print "font-family: 'Courier New', monospace;" >> fout
    print "font-size: 1.3rem;" >> fout
    print "xxbackground-color: #f9fafb;" >> fout
    print "background-color: #1a1a1a; /* Dark Gray */" >> fout
    print "color: #FFFFFF;" >> fout
    print "margin: 0;" >> fout
    print "display: flex;" >> fout
    print "}" >> fout
    print "</style>" >> fout
    print "<body>" >> fout
    print "<pre>" >> fout
    print "<code>" >> fout
    close(fout)
    return fout
}
function putTextFile(fn, sz,    fout) {
    fout="./text.txt"
    print fn "\n\n" sz "\n\n" >>  fout
    close(fout)
    return fout
}
function putMDFile(fn, sz,    fout) {
    # fout=tolower("./markdown/" "" fout ".md")
    fout=fn
    gsub(/[^[:alnum:]]/, "", fout)
    gsub(/[ ]/g, "", fout)
    fout=tolower("./tmp/" "" fout ".md")
    print "## Java Exercises\n\n### " fn "\n\n" sz "\n\n">  fout
    close(fout)
    return fout
}
function putHTMLFile(fn, sz,    fout) {
    fout=fn
    gsub(/[^[:alnum:]]/, "", fout)
    fout=tolower("./pages/" "" fout ".html")
    print sz >>  fout
    close(fout)
    return fout
}
function closeHTMLFile(fn,     fout) {
    fout=fn
    gsub(/[^[:alnum:]]/, "", fout)
    fout=tolower("./pages/" "" fout ".html")
    print "</code>" >>  fout
    print "</pre>" >> fout
    print "</body>" >> fout
    print "</html>" >> fout
    close(fout)
    return fout
}


function sq(sz) {
    return "'" sz "'";
}
function dq(sz) {
    return "\"" sz "\"";
}
function trim(str) {
  sub(/^[ \t\r\n]+/, "", str);
  sub(/[ \t\r\n]+$/, "", str);
  return str;
}
#
# gawk -f hash_function.awk
#

# Takes a string and generates a 24-character alphabetic hash.
#
# @param input_str The string to be hashed.
# @return A 24-character string containing only [a-zA-Z].
#
function ahash(input_str,       alpha, len_alpha, M, i, j, char_val, state, seed, result, dex) {

    # Character set for the output hash (a-z, A-Z)
    alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    len_alpha = length(alpha)

    # A large prime number for modulo arithmetic to keep numbers in a manageable range
    M = 1000000007

    # 1. Initialize a state array with arbitrary prime seed values
    state[1] = 97;  state[2] = 101; state[3] = 103; state[4] = 107
    state[5] = 109; state[6] = 113; state[7] = 127; state[8] = 131

    # 2. Process the input string to update the state array.
    #    Each character of the input string modifies the state.
    for (i = 1; i <= length(input_str); i++) {
        char_val = ord(substr(input_str, i, 1))
        for (j = 1; j <= 8; j++) {
            # Mix the current state with the character's ASCII value
            state[j] = (state[j] * 31 + char_val + j) % M
        }
    }

    # 3. Combine the final state array into a single seed value.
    seed = 0
    for (i = 1; i <= 8; i++) {
        seed = (seed + state[i]) % M
    }

    # 4. Generate the 8-character hash string using the seed.
    result = ""
    for (i = 1; i <= 8; i++) {
        # Use a Linear Congruential Generator (LCG) to create a pseudo-random sequence.
        # The constants (multiplier and increment) are from common LCG implementations.
        seed = (seed * 1664525 + 1013904223) % M

        # Map the pseudo-random number to an index in our alphabet.
        # We add 1 because gawk's string indexing is 1-based.
        dex = (seed % len_alpha) + 1

        # Append the selected character to the result.
        result = result substr(alpha, dex, 1)
    }

    return result
}
function bhash(input_str,       alpha, len_alpha, M, i, j, char_val, state, seed, result, dex) {

    # Character set for the output hash (a-z, A-Z)
    alpha = "ABCDEFGHJKMNPRSTWXYZ"
    len_alpha = length(alpha)

    # A large prime number for modulo arithmetic to keep numbers in a manageable range
    M = 1000000007

    # 1. Initialize a state array with arbitrary prime seed values
    state[1] = 97;  state[2] = 101; state[3] = 103; state[4] = 107
    state[5] = 109; state[6] = 113; state[7] = 127; state[8] = 131

    # 2. Process the input string to update the state array.
    #    Each character of the input string modifies the state.
    for (i = 1; i <= length(input_str); i++) {
        char_val = ord(substr(input_str, i, 1))
        for (j = 1; j <= 8; j++) {
            # Mix the current state with the character's ASCII value
            state[j] = (state[j] * 31 + char_val + j) % M
        }
    }

    # 3. Combine the final state array into a single seed value.
    seed = 0
    for (i = 1; i <= 8; i++) {
        seed = (seed + state[i]) % M
    }

    # 4. Generate the 4-character hash string using the seed.
    result = ""
    for (i = 1; i <= 4; i++) {
        # Use a Linear Congruential Generator (LCG) to create a pseudo-random sequence.
        # The constants (multiplier and increment) are from common LCG implementations.
        seed = (seed * 1664525 + 1013904223) % M

        # Map the pseudo-random number to an index in our alphabet.
        # We add 1 because gawk's string indexing is 1-based.
        dex = (seed % len_alpha) + 1

        # Append the selected character to the result.
        result = result substr(alpha, dex, 1)
    }

    return result
}

# Gawk script to demonstrate a text wrapping function.
#
# Usage: gawk -f word_wrap.awk

# Function: wrap_text
# Description: Inserts "<br>" tags into a string to ensure no line exceeds
#              a specified character limit, while respecting word boundaries.
# Parameters:
#   input_str - The string to be formatted.
#   line_limit - (Optional) The maximum length of a line. Defaults to 80.
#
# Local Variables (passed as parameters for local scope):
#   words, i, num_words, current_line, result_str
#
# Returns: The formatted string with <br> tags.
function wrap_text(input_str, line_limit, prefix, delim,    words, i, num_words, current_line, result_str) {
    if (line_limit < 0) {
        return input_str
    }
    if (delim == "") {
        delim="<br>"
    }
    if (line_limit == 0) {
        line_limit = 80
    }

    # Split the input string into an array of words
    num_words = split(input_str, words, " ")

    # If the string is empty or has no words, return an empty string
    if (num_words == 0) {
        return ""
    }

    # Initialize the first line with the first word
    current_line = words[1]
    result_str = ""

    # Iterate from the second word to the end
    for (i = 2; i <= num_words; i++) {
        # Check if adding the next word (plus a space) would exceed the limit
        if (length(current_line) + 1 + length(words[i]) > line_limit) {
            # If it exceeds, append the completed line and a <br> tag to the result
            result_str = result_str current_line delim prefix
            # Start a new line with the current word
            current_line = words[i]
        } else {
            # If it fits, add the word to the current line
            current_line = current_line " " words[i]
        }
    }

    # After the loop, append the final line to the result
    result_str = result_str current_line

    return result_str
}

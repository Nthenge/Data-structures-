var compress = function(chars) {
    let write = 0;
    let read = 0;

    while(read < chars.length){
        let currentChar = chars[read];
        let count = 0;

        while (read < chars.length && chars[read] === currentChar){
            read++;
            count++;
        }

        chars[write++] = currentChar;

        if(count > 1){
            for(let c of count.toString()){
                chars[write++] = c;
            }
        }
    }
    return write;
};

// Given an array of characters chars, compress it using the following algorithm:

// Begin with an empty string s. For each group of consecutive repeating characters in chars:

// If the group's length is 1, append the character to s.
// Otherwise, append the character followed by the group's length.
// The compressed string s should not be returned separately, but instead, be stored in the input character array chars. Note that group lengths that are 10 or longer will be split into multiple characters in chars.

// After you are done modifying the input array, return the new length of the array.

// You must write an algorithm that uses only constant extra space.
const moveZeroes = (arr) => {
    let read = 0, write = 0;

    while (read < arr.length) {
        if (arr[read] !== 0) {
            arr[write] = arr[read];
            write++;
        }
        read++;
    }
    while (write < arr.length) {
        arr[write] = 0;
        write++;
    }
}

// You are given an array of integers nums. Move all 0s to the end while maintaining the relative order of the non-zero elements.

// Do this in-place without making a copy of the array, and use constant extra space.
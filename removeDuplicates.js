const removeDuplicates = (arr) => {
    let read = 0;
    let write = 0;
    while (read < arr.length){
        arr[write] =arr[read];

        while(arr[read] === arr[read + 1]){
            read++;
        }
        read++;
        write++;
    }
    return write;
}

let nums = [0,0,1,1,1,2,2,3,3,4];
let newLength = removeDuplicates(nums);
console.log(newLength);     
console.log(nums.slice(0, newLength));

// Problem Statement:

// You're given a sorted array nums in non-decreasing order. You need to remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// After removing the duplicates, return the length of the new array. The first part of nums should contain the unique elements.

// Important:

// Do this in-place with O(1) extra memory.

// You cannot use another array.
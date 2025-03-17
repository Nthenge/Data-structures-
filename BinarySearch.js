arr = [21,43,545,76,54,23,98]

function BinarySearch(arr, targetVal){

    arr.sort((a, b) => a - b); // to sort the array first

    let left = 0;
    let right = arr.length - 1;

    while(left <= right){
        let mid = Math.floor((left + right) / 2)

        if(arr[mid] === targetVal){
            return mid
        }

        if(arr[mid] < targetVal){
            left = mid + 1;
        }else{
            right = mid - 1;
        }
    }

    return -1
}

console.log(BinarySearch(arr, 98))
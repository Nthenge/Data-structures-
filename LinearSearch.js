arr = [21,43,54,21,76,98,2,43]

function LinearSearch(arr, targetVal){
    for(let i = 0; i< arr.length; i++){
    if(arr[i]=== targetVal){
        return i
    }
}

    return -1
}

console.log(LinearSearch(arr, 2))

console.log(arr[6])
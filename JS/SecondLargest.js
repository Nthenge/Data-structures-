let arr= [2, 33, 32, 33]

function secondLargest(arr){
    if (arr.length < 2){
        return "Array must have atleast two values"
    }

    let secondLargest = -Infinity
    let largest = -Infinity

    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest){
            secondLargest = largest
            largest = arr[i]
        }else if (arr[i] > secondLargest && arr[i] !== largest){
            secondLargest = arr[i]
        }
    }

    return secondLargest
}

console.log(secondLargest(arr))
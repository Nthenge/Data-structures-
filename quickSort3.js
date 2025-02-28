const arr = [21,34,45,65,87,12,321,1,2,4,8]

function partition(arr, low, high){
    let pivot = arr[high]
    let i = low - 1

    for(let j = low; j < high; j++){
        if(arr[j] <= pivot){
            i++
            [arr[i], arr[j]] = [arr[j], arr[i]]
        }
    }

    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
    return i + 1
}

function quicksort(arr, low = 0, high = arr.length - 1){
    if(low < high){
        const pivotIndex = partition(arr, low, high);
        quicksort(arr, low, pivotIndex - 1);
        quicksort(arr, pivotIndex+1, high)
    }
}

quicksort(arr)
console.log(arr)
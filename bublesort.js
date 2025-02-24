const arr = [23,21,43,65,2,1,54,27]
const n = arr.length;

for(let i = 0; i < n - 1; i++){
    let swapped = false

    for(let j = 0; j < n - i - 1; j++){
        if(arr[j] > arr[j + 1])
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            swapped = true
    }

    if(!swapped)
        break
}

console.log(arr)
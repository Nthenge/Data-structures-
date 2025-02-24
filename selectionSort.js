const arr = [64, 34, 25, 5, 22, 11, 90, 12];
const n = arr.length

for(let i = 0; i < n; i++){
    let midIndex = i;

    for(let j = i + 1; j < n; j++){
        if(arr[j] < arr[midIndex])
            midIndex = j
    }

    if(midIndex !== i){
        const temp = arr[i];
        arr[i] = arr[midIndex];
        arr[midIndex] = temp;
    }
}

console.log(arr)
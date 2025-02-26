const arr = [32,43,65,32,65,12,4,12,97]
const n = arr.length

for(let i = 1; i < n; i++){
    let currentValue = arr[i]
    let insertIndex = i

    for(let j = i - 1; j >= 0; j--){
        if(arr[j] > currentValue){
            arr[j + 1] = arr[j]
            insertIndex = j
        }
    }
    arr[insertIndex] = currentValue
}

console.log(arr)
//space complexity  = O(1)
// worst case - when the array is not sorted O(n2)
// best case - when the array is sorted O(n)
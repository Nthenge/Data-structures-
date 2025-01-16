// let arr = [29, 10, 14, 37, 14];
// let arr = [4, 8, 1, 3, 9];
let arr = [ 25, 12, 22, 11, 64, 59];
let swaps = 0;

function selectionSort2(){
    let n = arr.length

    for (let i = 0; i < n-1; i++){
        let minIndex = i;

        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(minIndex !== i){
            let temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
            swaps++
        }
    }
    return arr
}

console.log("This is the output " + selectionSort2()+ " and this is the number of swaps "+ swaps)





let strings = ["apple", "Orange", "banana", "grape", "Pineapple"];

function selectionSortStrings(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < n; j++) {
            // Compare strings using localeCompare
            if (arr[j].toLowerCase().localeCompare(arr[minIndex].toLowerCase()) < 0) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            // Swap the strings
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

console.log(selectionSortStrings(strings));

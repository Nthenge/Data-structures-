const array = [2, 43, 67, 1, 55, 89, 65, 32];

const Quicksort = (array) => {

    if(array.length <= 1){
        return array;
    }
    
    const pivot = array[array.length - 1]
    const left = []
    const right = []

    for (let i = 0; i < array.length - 1; i++){
        if(array[i] < pivot){
            left.push(array[i])
        }else {
            right.push(array[i])
        }
    }

    return [...Quicksort(left), pivot, ...Quicksort(right)]

}
const sortedArray = Quicksort(array);
console.log("Sorted Array:", sortedArray);

// has average and best-case time comlexity of O(n log n)
// space comlexity of O(log(n)) or can be O(n)
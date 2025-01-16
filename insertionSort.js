const array = [2, 43, 67, 1, 55, 89, 65, 32];
const InsertionSort = () => {
    const n = array.length

    for (let i = 1; i < n; i++){
        let key = array[i]
        let j = i - 1

        while(j >= 0 && array[j] > key){
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = key
    }
    return array;
}

const sortedArray = InsertionSort(array.slice())

console.log('sorted Array: ' + sortedArray)

//space complexity  = O(1)
// worst case - when the array is not sorted O(n2)
// best case - when the array is sorted O(n)
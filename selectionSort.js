const array = [2, 43, 67, 1, 55, 89, 65, 32];

const SelectionSort = () => {
    const n = array.length

    for (let i = 0; i < n - 1; i++){
        let midIndex = i;

        for(let j = i + 1; j < n; j++){
            if(array[j] < array[midIndex]){
                midIndex = j
            }
        }

        if (midIndex !== i){
            let temp = array[i]
            array[i] = array[midIndex]
            array[midIndex] = temp
    }
}
return array
}

const SortedArray = SelectionSort(array.slice())
SelectionSort(console.log(SortedArray))
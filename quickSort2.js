const array = [65,32,1,87,111,12,0,43,57,78]

const QuickSort2 = (array) => {
    const n = array.length

    if (n <= 1){
        return array
    }

    const pivot = array[n - 1]
    const left = []
    const right = []

    for(let i = 0; i < n - 1; i++){
        if(array[i] < pivot){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return [...QuickSort2(left), pivot, ...QuickSort2(right)]
}

const sortedArray = QuickSort2(array)
console.log("Sorted Array "+ sortedArray)
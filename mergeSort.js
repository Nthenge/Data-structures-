const array = [2, 43, 67, 1, 55, 89, 65, 32];

const MergeSort = (array) => {
    if(array.length <= 1){
        return array
    }

    const middle = Math.floor(array.length / 2);
    const leftHalf = array.slice(0,middle)
    const rightHalf = array.slice(middle)

    const sortedLefthalf = MergeSort(leftHalf)
    const sortedRightHalf = MergeSort(rightHalf)

    return merge(sortedLefthalf, sortedRightHalf)
}   

const merge = (left, right) => {
    let mergedArray = []
    let leftIndex = 0
    let rightIndex = 0

    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            mergedArray.push(left[leftIndex])
            leftIndex++
        }else{
            mergedArray.push(right[rightIndex])
            rightIndex++
        }
    }

    while(leftIndex < left.length){
        mergedArray.push(left[leftIndex]);
        leftIndex++
    }

    while(rightIndex < right.length){
        mergedArray.push(right[rightIndex])
        rightIndex++
    }
    return mergedArray
}

const sortedArray = MergeSort(array);

console.log("Sorted Array:", sortedArray);

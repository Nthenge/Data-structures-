const arr = [2, 43, 67, 1, 55, 89, 65, 32];

function mergeSort(arr){
    if(arr.length <= 1){
        return arr
    }

    const mid = Math.floor(arr.length / 2);
    const lefthalf = arr.slice(0,mid);
    const righthalf = arr.slice(mid);


    const sortedLeft = mergeSort(lefthalf)
    const sortedRight = mergeSort(righthalf)

    return merge(sortedLeft, sortedRight)
}

function merge(left, right){
    let result = []
    let i = 0, j = 0;

    while(i < left.length && j < right.length){
        if(left[i] < right[j]){
            result.push(left[i])
            i++
        }else{
            result.push(right[j])
            j++
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort(arr))

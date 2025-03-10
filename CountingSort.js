const arr = [4,2,2,6,3,5,1,6,5,2,3,7]
function countingSort(arr){
    const maxVal = Math.max(...arr)
    const count = new Array(maxVal + 1).fill(0);

    while(arr.length > 0){
        let num = arr.shift();
        count[num]++;
    }

    for(let i = 0; i < count.length; i++){
        while (count[i] > 0){
            arr.push(i);
            count[i]--;
        }
    }

    return arr;
}

console.log(countingSort(arr))


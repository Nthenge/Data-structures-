const arr = [12,43,54,222,43,1,54,8,21,45,766,3243]

function radixSort(arr){

    const radixArr = Array.from({length: 10}, () => []);
    let maxVal = Math.max(...arr);
    let exp = 1;

    while(Math.floor(maxVal / exp ) > 0){

        while (arr.length > 0){
            let val = arr.pop();
            let radixIndex = Math.floor(val / exp) % 10;
            radixArr[radixIndex].push(val);
        }

        for(let bucket of radixArr){
            while(bucket.length > 0){
                arr.push(bucket.pop());
            }
        }

        exp *= 10
    }

    return arr
}

console.log(radixSort(arr))

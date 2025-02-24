const arr = [ 7,12,9,11,3 ]
let minVal = arr[0]
for(let i of arr){
    if(i < minVal)
        minVal = i
}

console.log(minVal)
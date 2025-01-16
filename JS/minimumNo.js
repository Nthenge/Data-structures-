let arr = [50, 20, 40, 10, 30];
let minimum = arr[0]

for(let i = 0; i < arr.length; i++){
    if(arr[i] < minimum){
        minimum = arr[i]
    }
}

console.log("Minimum value: "+ minimum)
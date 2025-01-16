let arr = [10,8,30,4,5]

function LookForNumber(n){
    for(let i= 0; i < arr.length; i++){
        if(arr[i] === n){
            return i
        }
    }
    return "-1"
}

console.log(LookForNumber(5))
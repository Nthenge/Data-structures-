
const arr = [1,12,43,65,323,65,22,543]

//Constant time, Time complexity O(1), space complexity O(1)
function constantFunction(arr){
    return arr[0]
}
// console.log(constantFunction(arr))


// Linear time, Time complexity 0(n),space complexity O(1)
function linearTime(arr){
    arr.forEach(element => {
        console.log(element)
    });
}
// console.log(linearTime(arr))


// Quadratic time, Time complexity 0(n2), space complexity O(1)
function quadraticTime(arr){
    arr.forEach(i =>{
        arr.forEach(j => {
            console.log(i,j)
        })
    })
}
console.log(quadraticTime(arr))
// function hashFunction(value) {
//     let sumOfChars = 0;
//     for (let i = 0; i < value.length; i++) {
//         sumOfChars += value.charCodeAt(i); // charCodeAt gets ASCII value
//     }

//     return sumOfChars % 10;
// }

// console.log("'Bob' has hash code:", hashFunction('Bob'));


function hashFfunction(data){
    let sumOfChar = 0;
    for(let i = 0; i < data.length; i++){
        sumOfChar += data.charCodeAt(i);
    }

    return sumOfChar % 10;
}

console.log("Bob has hash code: ", hashFfunction('Bob'))
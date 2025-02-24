let prev1 = 0
let prev2 = 1

console.log(prev1)

for(let i = 0; i < 18; i++){
    let newFib = prev1 + prev2;
    console.log(newFib)

    prev2 = prev1
    prev1 = newFib
}

// fibonacci using recursion

let count = 2;

function fibonacci(pre1, pre2){
    while(count <= 19){
        const newfib = pre1 + pre2;
        console.log(newfib)
        count++

        fibonacci(newfib, pre1)
    }
    return
}

fibonacci(1,0)
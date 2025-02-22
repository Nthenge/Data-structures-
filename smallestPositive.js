function smallestPositive(a){
    const set = new Set(a);
    let smallest = 1;
    
    while(set.has(smallest))
        smallest ++

    return smallest
}

const a = [-1,-2,-3]
console.log(smallestPositive(a))
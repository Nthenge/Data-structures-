function Leader(a){
    const countMap = {}
    for(const num of a){
        countMap[num] = (countMap[num] || 0) + 1;
        if(countMap[num] > a.length / 2)
            return num 
    }
    return -1
}

const a = [2,2,4,3,3,3,3,3]
console.log(Leader(a))
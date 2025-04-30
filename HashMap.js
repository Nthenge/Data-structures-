const myHashSet = [[null], ['Jones'], [null], ['Lisa'], [null], ['Bob'], [null], ['Siri'], ['Pete'], [null]];

const HashMap = (value) => {
    let sumOfChars = 0;
    for(let i = 0; i < value.length; i++){
        sumOfChars += value.charCodeAt(i);
    }

    return sumOfChars % 10
}

function add(value){
    const index = HashMap(value)
    const bucket = myHashSet[index];

    if(bucket.length === 1 && bucket[0] === null){
        myHashSet[index] = value;
    }else if(!bucket.includes(value)){
        bucket.push(value);
    }
}

function contains(value){
    const index = HashMap(value);
    const bucket = myHashSet[index];
    return bucket.includes(value);
}

add('Stuart');

console.log(myHashSet);
console.log("Contain Stuart at: ", contains('Stuart'))

let myHashSet = [
    [null],
    ["Jones"],
    [null],
    ["Lisa"],
    [null],
    ["Bob"],
    [null],
    ["Siri"],
    ["Pete"],
    [null]
];

function hashFunction(value) {
    return [...value].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 10;
}

function add(value) {
    let index = hashFunction(value);
    let bucket = myHashSet[index];

    if (!bucket.includes(value)) {
        bucket.push(value);
    }
}

function contains(value) {
    let index = hashFunction(value);
    let bucket = myHashSet[index];

    return bucket.includes(value);
}

// Add 'Stuart'
add("Stuart");

console.log(myHashSet);
console.log("Contains Stuart:", contains("Stuart"));

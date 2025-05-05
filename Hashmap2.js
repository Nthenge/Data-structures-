class SimpleHashMap{
    constructor(size = 10){
        this.size = size;
        this.buckets = Array.from({length: size}, () => []);
    }

    hashfucntion(key){
        let sum = 0;
        for(let char of key){
            if(!isNaN(char) && char != " "){
                sum  += parseInt(char)
            }
        }
        return sum % 10
    }

    put(key, value){
        const index = this.hashfucntion(key);
        const bucket = this.buckets[index];

        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key){
                bucket[i][1] = value;
                return;
            }
        }
        bucket.push([key, value]);
    }

    get(key){
        const index = this.hashfucntion(key);
        const bucket = this.buckets[index];

        for(let [k, v] of bucket){
            if(k === key){
                return v
            }
        }

        return null
    }

    remove(key){
        const index = this.hashfucntion(key);
        const bucket = this.buckets[index];

        for(let i = 0; i < bucket.length; i++){
            if(bucket[i][0] === key){
                bucket.splice(i, 1);
                return;
            }
        }
    }

    printMap(){
        console.log("Hash Map Contents:");
        this.buckets.forEach((bucket, index) => {
            console.log(`Bucket ${index}:`, bucket);
        });
    }
}

const myMap = new SimpleHashMap();

myMap.put("abc123", "Apple");
myMap.put("xyz456", "Banana");
myMap.put("qwe789", "Cherry");

console.log("Get abc123:", myMap.get("abc123")); // Apple
myMap.remove("abc123");
console.log("Get abc123 after removal:", myMap.get("abc123")); // null

myMap.printMap();
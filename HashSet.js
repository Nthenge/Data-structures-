class SimpleHashSet{
    constructor(size = 4) {
        this.size = size;
        this.buckets = Array.from({ length: size }, () => []);
        this.count = 0;
        this.loadFactor = 0.75;
    }

    hashFunction(value){
        let sum = 0;
        for(let i = 0; i < value.length; i++){
            sum += value.charCodeAt(i); // charCodeAt gets ASCII value
        }
        return sum % this.size;
    }

    add(value){
        if(this.count / this.size >= this.loadFactor){
            this.resize();
        }
        let index = this.hashFunction(value);
        let bucket = this.buckets[index];
        if(!bucket.includes(value)){
            bucket.push(value);
            this.count++;
        }
    }

    contains(value){
        let index = this.hashFunction(value);
        return this.buckets[index].includes(value);
    }

    remove(value){
        const index = this.hashFunction(value);
        const bucket = this.buckets[index];
        const valueIndex = bucket.indexOf(value);
        if(valueIndex !== -1){
            bucket.splice(valueIndex, 1);
            this.count--;
        }
    }

    resize(size = this.size * 2){
        const newSet = new SimpleHashSet(size);
        this.buckets.forEach(bucket => {
            bucket.forEach(value => {
                newSet.add(value);
            });
        });
        this.buckets = newSet.buckets;
        this.size = newSet.size;
    }

    printSet(){
        console.log("Hash Set Contents:");
        this.buckets.forEach((bucket, index) => {
            console.log(`Bucket ${index}:`, bucket);
        });
    }
}

const myHashSet = new SimpleHashSet();
myHashSet.add('Bob');
myHashSet.add('Alice');
myHashSet.add('Charlie');
myHashSet.add('Bob');
myHashSet.add('David');


myHashSet.printSet();
console.log(myHashSet.contains('Bob'));


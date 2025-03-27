class SimpleHashMap {
    constructor(size = 100) {
        this.size = size;
        this.buckets = Array.from({ length: size }, () => []); // Initialize buckets as empty arrays
    }

    hashFunction(key) {
        // Sum only the numerical values of the key, ignoring non-numeric characters
        let numericSum = [...key].reduce((sum, char) => {
            return /\d/.test(char) ? sum + parseInt(char, 10) : sum;
        }, 0);
        return numericSum % 10; // Perform modulo 10 on the sum
    }

    put(key, value) {
        // Add or update a key-value pair
        let index = this.hashFunction(key);
        let bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update existing key
                return;
            }
        }
        bucket.push([key, value]); // Add new key-value pair if not found
    }

    get(key) {
        // Retrieve a value by key
        let index = this.hashFunction(key);
        let bucket = this.buckets[index];

        for (let [k, v] of bucket) {
            if (k === key) return v;
        }
        return null; // Key not found
    }

    remove(key) {
        // Remove a key-value pair
        let index = this.hashFunction(key);
        let bucket = this.buckets[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove the key-value pair
                return;
            }
        }
    }

    printMap() {
        // Print all key-value pairs in the hash map
        console.log("Hash Map Contents:");
        this.buckets.forEach((bucket, index) => {
            console.log(`Bucket ${index}:`, bucket);
        });
    }
}

// Example usage:
let myMap = new SimpleHashMap(10);

myMap.put("key123", "Value A");
myMap.put("data56", "Value B");
myMap.put("item89", "Value C");

myMap.printMap();
console.log("Get key123:", myMap.get("key123"));

myMap.remove("key123");
console.log("After removing key123:");
myMap.printMap();
console.log("Get key123:", myMap.get("key123"));

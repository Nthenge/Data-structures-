class SimpleHashSet {
    constructor(size = 100) {
        this.size = size;
        this.buckets = Array.from({ length: size }, () => []); // Initialize buckets as empty arrays
    }

    hashFunction(value) {
        // Simple hash function: sum of character codes modulo the number of buckets
        return [...value].reduce((sum, char) => sum + char.charCodeAt(0), 0) % this.size;
    }

    add(value) {
        // Add a value if it's not already present
        let index = this.hashFunction(value);
        let bucket = this.buckets[index];

        if (!bucket.includes(value)) {
            bucket.push(value);
        }
    }

    contains(value) {
        // Check if a value exists in the set
        let index = this.hashFunction(value);
        return this.buckets[index].includes(value);
    }

    remove(value) {
        // Remove a value
        let index = this.hashFunction(value);
        let bucket = this.buckets[index];
        let valueIndex = bucket.indexOf(value);

        if (valueIndex !== -1) {
            bucket.splice(valueIndex, 1);
        }
    }

    printSet() {
        // Print all elements in the hash set
        console.log("Hash Set Contents:");
        this.buckets.forEach((bucket, index) => {
            console.log(`Bucket ${index}:`, bucket);
        });
    }
}

// Example usage:
let mySet = new SimpleHashSet(10); // Create a hash set with 10 buckets

mySet.add("Jones");
mySet.add("Lisa");
mySet.add("Bob");
mySet.add("Siri");
mySet.add("Pete");
mySet.add("Stuart");

mySet.printSet();
console.log("Contains Stuart:", mySet.contains("Stuart"));

mySet.remove("Stuart");
console.log("After removing Stuart:");
mySet.printSet();
console.log("Contains Stuart:", mySet.contains("Stuart"));

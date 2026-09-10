// Create an empty hash table
let hashTable = {};

// Insert key-value pairs
hashTable["name"] = "Alice";
hashTable["age"] = 25;
hashTable["city"] = "New York";

// Search for values by key
console.log(hashTable["name"]); // Output: Alice
console.log(hashTable["age"]); // Output: 25

// Delete a key-value pair
delete hashTable["city"];

// Check if a key exists
console.log("city" in hashTable); // Output: false


// Create an empty Map
let map = new Map();

// Insert key-value pairs
map.set("name", "Alice");
map.set("age", 25);
map.set("city", "New York");

// Search for values by key
console.log(map.get("name")); // Output: Alice
console.log(map.get("age")); // Output: 25

// Delete a key-value pair
map.delete("city");

// Check if a key exists
console.log(map.has("city")); // Output: false
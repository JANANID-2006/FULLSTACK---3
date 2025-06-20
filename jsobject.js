let jsObject = {
    name: "Janani",
    age: 19
};

// Convert JS object to JSON string
let jsonString = JSON.stringify(jsObject);
console.log(jsonString);
console.log(typeof jsonString); 

// Convert JSON string back to JS object
let parsedObject = JSON.parse(jsonString);
console.log( parsedObject);
console.log(typeof parsedObject);

// Store and retrieve from localStorage
localStorage.setItem("username", "Janani");

// ❗ Fix: use string key, not undefined variable
let item = localStorage.getItem("username");
console.log(item);

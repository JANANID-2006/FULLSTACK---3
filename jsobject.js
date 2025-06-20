let jsObject = {
    name: "Janani",
    age: 19
};

// Convert JS object to JSON string
let jsonString = JSON.stringify(jsObject);
console.log("JSON String:", jsonString);
console.log("Type of jsonString:", typeof jsonString); // string

// Convert JSON string back to JS object
let parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);
console.log("Type of parsedObject:", typeof parsedObject);
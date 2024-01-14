//your JS code here. If required.
const student = {
  name: "John Doe"
};

// Add getKeys() method to Object prototype
Object.prototype.getKeys = function() {
  // Get all keys of the object and return them as an array
  return Object.keys(this);
};

// Test the getKeys() method
const keysArray = student.getKeys();
console.log(keysArray);
// Javascript code
function add(a, b, c) {
    return a + b + c;
}
var sum = add("Hello", 4);
console.log(sum);
sum = add("Hello", 4, 5);
console.log(sum);
// Typescript code to add type checking
function addNumbers(a, b) {
    return a + b;
}
sum = addNumbers(4, 4);
console.log(sum);

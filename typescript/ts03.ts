// Javascript code

function add(a,b,c?):number{
    return a+b+c
}
var sum=add("Hello",4)
console.log(sum)
sum=add("Hello",4,5)
console.log(sum)


// Typescript code to add type checking

function addNumbers(a:number,b:number):number{
    return a+b
}

sum=addNumbers(4,4)
console.log(sum)
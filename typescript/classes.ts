class Person
{
    private firstName:string;
    private lastName:string;
    constructor(firstName:string,lastName:string){
        this.firstName=firstName
        this.lastName=lastName
    }
    getFullName(){
        return this.firstName+this.lastName;
    }
}
var aPerson = new Person("Hello","World");
console.log(aPerson.getFullName())
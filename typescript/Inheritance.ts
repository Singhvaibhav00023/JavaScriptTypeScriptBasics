class Teacher{
    firstName:string
    lastName:string
    greet(){
        console.log("Greetings by Teacher")
    }
}

class Student extends Teacher{
    greet(): void {
        console.log("Greetings by Student")
    }
}

var aStudent:Teacher=new Student();
aStudent.greet()
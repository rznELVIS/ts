class User {
    name : string;
    constructor(_name:string){
          
        this.name = _name;
    }
}

let hello: string = "hello world";
hello = 23;

const tom : User = new User("Том");
const header = this.document.getElementById("header");
header.innerHTML = "Привет!! " + tom.name + hello;
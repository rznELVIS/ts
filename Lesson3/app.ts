class User {
    name : string;
    constructor(_name:string){
          
        this.name = _name;
    }
}

let hello: string = "hello world";

const tom : User = new User("Том");

let big : bigint = 1000n;

let d : number = 1;

const header = this.document.getElementById("header");
header.innerHTML = `Привет!! " + ${tom.name} ${hello}, number ${d}, bigint: ${big}`;


class User {
    constructor(_name) {
        this.name = _name;
    }
}
let hello = "hello world";
const tom = new User("Том");
let big = 1000n;
let d = 1;
const header = this.document.getElementById("header");
header.innerHTML = `Привет!! " + ${tom.name} ${hello}, number ${d}, bigint: ${big}`;

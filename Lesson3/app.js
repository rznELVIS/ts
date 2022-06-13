var User = /** @class */ (function () {
    function User(_name) {
        this.name = _name;
    }
    return User;
}());
var hello = "hello world";
hello = 23;
var tom = new User("Том");
var header = this.document.getElementById("header");
header.innerHTML = "Привет!! " + tom.name + hello;

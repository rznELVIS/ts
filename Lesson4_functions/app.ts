function add(a: number, b: number) : number {
    let result = a + b;
    console.log(result);

    return result;
}

const header = this.document.getElementById("header");
header.innerHTML = `Привет!! " + add: ${add(10, 15)}`;


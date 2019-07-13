console.log("Trying to figure out the build it visibile.js");
// understanding ES6 class

class Person {
  constructor(name = "Annoymous", age = "0") {
    console.log("Creating instances of a class");
    this.name = name;
    this.age = age;
  }
  getDescription() {
    return ` ${this.name} is ${this.age} years old`;
  }
}
const Andrew = new Person("Andrew Mead", "25");
const Snehasis = new Person();
console.log(Snehasis.getDescription());
console.log(Andrew.getDescription());

let template = <h1> Changing Toggle checking</h1>;

const rootlocation = document.getElementById("app2");
ReactDOM.render(template, rootlocation);

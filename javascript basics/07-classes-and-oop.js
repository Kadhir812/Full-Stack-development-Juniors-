// JavaScript Basics — 7) Classes & OOP
// Run: node "javascript basics\\07-classes-and-oop.js"

class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hi, I'm ${this.name}`;
  }
}

class Employee extends Person {
  constructor(name, role) {
    super(name);
    this.role = role;
  }
  describe() {
    return `${this.name} works as ${this.role}`;
  }
}

const e = new Employee("Riya", "Developer");
console.log(e.greet());
console.log(e.describe());

// Private fields (stage-3, widely supported in modern runtimes)
class Counter {
  #count = 0; // private
  inc() { this.#count++; }
  get value() { return this.#count; }
}
const c = new Counter();
c.inc();
console.log("counter:", c.value);

// Practice:
// - Add a Manager class with teamSize and a method summary().

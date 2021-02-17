// Prototype Inheritance
// Person Constructor

function Person(firstName , lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
    return `Hello Good sir!  ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('I am  Alfred');

console.log(person1.greeting());

// Customer Constructor
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);

    this.phone = phone;
    this.membership = membership;
}

// Inherit the person prototype method
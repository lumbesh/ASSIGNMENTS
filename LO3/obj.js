const person = {
    firstName: 'Jose ',
    lastName: 'Rizal',
    age: 159,
    email: 'mrfboiworldwide@illustrado.com',
    hobbies: ['Sulat','FLirt with chickas','mang-asar ng kastila'],
    address: {
        city: 'Calamba',
        street: 'Laguna'
    },
    quotes: ["Mabaho ang Isda" , "Wag aamin hanggat dein nahuhuli" , "Yawa" ],
    getBirthYear: function() {
        return 2020 - this.age;
        
    }
};

let value;

value = person;

value = person.firstName;
value = person.age;
value = person.hobbies[1];
value = person.address.city;
value = person.address.street;
value = person.getBirthYear();
value = person.quotes;

console.log(value);

const people = [{name: 'Jose' , age: 131}, {name: 'Magellan' , age: 121}, {name: 'Cong' , age: 321}];

for(let i= 0; i < people.length; i++){
    console.log(people[i].age);

};

console.log(clear);
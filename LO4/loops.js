// for loop
for(let i= 0; i < 20; i++) {
    if (i === 15) {
    console.log('15 is my favorite number');
    continue;
    }
    if (i === 15) {
        console.log('You got it right!');
        break;
    }
    console.log(`Number ${i}`);
}
    
// while loop

let i = 0;

while (i<20) {
    console.log(`Number ${i}`);
    i++;
}

// do while
do {
    console.log(`Number ${i}`);
    i++
}

while (i > 20);

//loop through array
const cars =['GTR', 'Lamborghini', 'Charger'];

for (let i = 0; i < cars.length; i++){
    console.log(cars[i]);
}

//Foreach
cars.forEach(function(car, index, array){
    console.log(`${index} : ${cars}`);
    console.log(`${array}`);
    });
  

//Map
  const users = [{id: 1, name: 'Batman'}, {id: 2, name: 'Wolverine'}, {id: 3, name: 'Yawa man'}, {id: 4, name: 'Captain Barbell'}];
  
  const ids = users.map(function(user){
      return user.name
  });
  
  console.log(ids);
  
  //For In Loop
  
  const pers = {
      firstName: 'Naruto',
      lastName: 'Shippuden',
      age: 237
  };
  
  for(let x in pers){
    console.log(`${x}: ${pers[x]}`);
  }

console.log(clear);
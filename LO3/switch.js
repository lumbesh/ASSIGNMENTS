const color = 'Orange';

switch(color){
    case 'blue':
        console.log('Color is Blue!');
        break;
    case 'Orange':
        console.log('Color is Orange!');
        break;
    default:
        console.log("The color is neither Blue nor Orange(");
        break;
}

let day

switch(new Date().getDay()) {
    case '0':
        day = 'Sunday';
        break;
    case '1':
        day = 'Monday';
        break;
    case '2':
        day = 'Tuesday';
        break;
    case '3':
        day = 'Wednesday';
        break;
    case '4':
        day = 'Thursday';
        break;
    case '5':
        day = 'Friday';
        break;
    case '6':
        day = 'Saturday';
        break;
    case '7':
        day = 'Sunday';
        break;
    default:
        break;
}
console.log(`Today is ${day}`);
console.log(clear);
//document.getElementById();

console.log(document.getElementById('task-title'));

//Styles
const taskTitle = document.getElementById('task-title');
// taskTitle.style.background = 'lime';
taskTitle.style.fontFamily = 'Times New Roman';
taskTitle.style.fontStyle = 'Italic';
taskTitle.style.backgroundImage = 'url(creationadam.jpg)'

taskTitle.textContent = 'Hello';
taskTitle.innerText = 'My Task';




//QuerySelector
console.log(document.querySelector('#task-title'));
console.log(document.querySelector('.card-title'));
console.log(document.querySelector('h5'));

document.querySelector('li').style.color = 'red';
document.querySelector('ul li').style.backgroundImage = 'url(creationadam.jpg)';

document.querySelector('li:nth-child(2)').style.color = 'yellow';
document.querySelector('ul li:nth-child(2)').style.backgroundImage = 'url(creationadam.jpg)';

document.querySelector('li:nth-child(3)').style.color = 'white';
document.querySelector('ul li:nth-child(3)').style.backgroundImage = 'url(creationadam.jpg)';

document.querySelector('li:last-child').style.color = 'green';
document.querySelector('ul li:last-child').style.backgroundImage = 'url(creationadam.jpg)';

//you can also use "odd and even"  ex: li:nth-child(even)
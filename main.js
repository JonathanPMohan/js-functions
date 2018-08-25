const bananaDiv = document.getElementById("banana");
bananaDiv.innerHTML = 'im a banana';

let counter = 0;
counter = counter + 1;
counter += 1;
counter++

// counter = 3
console.log('counter: ', counter);

const greetingElement = document.getElementById('greeting');
const firstName = 'jonathan';
const lastName = 'mohan';
// greetingElement.innerHTML = 'Hello my name is ' + firstName + ' ' + lastName;
greetingElement.innerHTML = `Hello my name is ${firstName} ${lastName}`;

// object shorthand notation
let name = 'jonathan';
let age = '39';

//let person = {
   // name: name,
 //   age: age
//};

let person = {name, age};
console.log('person:', person.name);
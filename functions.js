// input = animal ex. fish
// output = animal product ex fish stix

function nuggetizer(animal){
    return `${animal} stix`;
}




console.log('fish:', nuggetizer('fish'));
console.log('cat:', nuggetizer('cat'));
console.log('bear:', nuggetizer('bear'));

const nuggetizer2 = (animal) => {
    return `${animal} jerky`
};

console.log('deer:', nuggetizer2('deer'));

const bearSticks = nuggetizer('bear');

const nomnom =(name, food) => {
    return `${name} devoured ${food}`
}

console.log(nomnom('jonathan', bearSticks)); // Jonathan devoured bear stix

// function numberAdder that takes in a number and
//return the number plus 3. so input=22, output = 25

const numberAdder = (num) => {
    const finalNumber = num + 3;
    printToDom(`<h2>${finalNumber}</h2>`, 'feelings');
}

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;

};
numberAdder(22); // 25
numberAdder(2); // 25
numberAdder(3); // 25
numberAdder(7); // 25

printToDom('I am ready for lunch', 'feelings');
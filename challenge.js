let bandNumber = 1

let takeNumber = (bandName) => {
    printToDom(`<h2>${bandNumber}: ${bandName}</h2>`, 'feelings');

    bandNumber += 1;


}

let printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;

};

takeNumber("Galactic Scum");
takeNumber("Underdogs");
takeNumber("Fizzy Izzy");



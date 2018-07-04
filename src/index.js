import './style.css';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
debugger; // eslint-disable-line no-debugger
console.log(`I would pay ${courseValue} for this awesome course`); // eslint-disable-line no-console

function add() {
    var number1 = Document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var answer = number1 + number2;
    document.getElementById('answer').innerHTML = answer; 
}

function subtract() {
    var number1 = Document.getElementById('number1').value;
    var number2 = document.getElementById('number2').value;
    var answer = number1 - number2;
    document.getElementById('answer').innerHTML = answer; 
}
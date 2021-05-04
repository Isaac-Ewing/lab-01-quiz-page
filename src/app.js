import { countAsYes } from './utils.js';

const buttonPress = document.getElementById('button');
const hiddenText = document.getElementById('hidden-response');
let score = 0;

buttonPress.addEventListener('click', () => {
    alert("You're about to take a quiz");
    const takeQuiz = confirm('Would you like to take it?');
    if (takeQuiz === false)
        return;
    const firstName = prompt('What is your first name');
    const Q1 = prompt('Does Isaac have a life?');
    if (countAsYes(Q1) === false)
        score++;
    const Q2 = prompt("Is Rocket League in Isaac's top games?");
    if (countAsYes(Q2) === false)
        score++;
    const Q3 = prompt('Does Isaac like gummy bears?');
    if (countAsYes(Q3) === true)
        score++;
    alert('The quiz is done! Check below to see your results.');
    hiddenText.textContent = `${firstName}, you got ${score} questions correct!`;
});
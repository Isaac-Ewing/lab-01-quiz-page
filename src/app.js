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
    if (countAsYes(Q1) === false){
        score++;
    }
    const Q2 = prompt("Is Rocket League in Isaac's top games?");
    if (countAsYes(Q2) === false){
        score++;
    }
    const Q3 = prompt('Does Isaac like gummy bears?');
    if (countAsYes(Q3) === true){
        score++;
    }
    alert('The quiz is done! Check below to see your results.');
    if (score === 0) {
        hiddenText.textContent = `${firstName}, you got ${score} questions correct. That's 0%! Do better.`;
    }
    if (score === 1) {
        hiddenText.textContent = `${firstName}, you got ${score} question correct. That's 33%! Don't feel bad, but don't feel good.`;
    }
    if (score === 2) {
        hiddenText.textContent = `${firstName}, you got ${score} question correct. That's 67%! Pretty good but it wasn't exactly difficult`;
    }
    if (score === 3) {
        hiddenText.textContent = `${firstName}, you got ${score} question correct. That's 100%! Excellent, you can read!`;
    }
});
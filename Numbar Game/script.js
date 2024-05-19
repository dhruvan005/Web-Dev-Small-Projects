let randomNum = parseInt(Math.random() * 100 + 1)
// console.log(randomNum);

const userInput = document.querySelector('#guessField')
const submit =  document.querySelector('#subt')
const lowOrHi = document.querySelector('.lowOrHi')
const remaining = document.querySelector('.lastResult')
const guessSlot = document.querySelector('.guesses')
const startOver = document.querySelector('.resultParas');

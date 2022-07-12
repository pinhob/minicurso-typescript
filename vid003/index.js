"use strict";
const firstNumber = document.getElementById('first');
const secondNumber = document.getElementById('second');
const btn = document.getElementById('button');
const sum = (a, b) => a + b;
btn.addEventListener('click', () => {
    console.log(sum(Number(firstNumber.value), Number(secondNumber.value)));
});

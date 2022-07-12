const firstNumber = document.getElementById('first') as HTMLInputElement;
const secondNumber = document.getElementById('second') as HTMLInputElement;
const btn = document.getElementById('button') as HTMLButtonElement;

const sum = (a: number, b: number) => a + b;

btn.addEventListener('click', () => {
  console.log(sum(Number(firstNumber.value), Number(secondNumber.value)));
});

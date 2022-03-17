let firstNumber = 0;
let secondNumber = 0;
const primaryNum = document.querySelector('#ans');
primaryNum.textContent = firstNumber;

const prevAns = document.querySelector('#prevAns');
prevAns.textContent = secondNumber;

const numButton = document.querySelectorAll('.number');

for(let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener('click', function(e) {console.log(e.target.value)});
}

for(let i = 0; i < 10; i++) {
    
}
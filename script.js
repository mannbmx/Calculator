let firstNumber = 0;
let secondNumber = 0;
const primaryNum = document.querySelector('#ans');
primaryNum.textContent = firstNumber;

const prevAns = document.querySelector('#prevAns');
prevAns.textContent = secondNumber;

const numButton = document.querySelectorAll('.number');
let a;
let b = '';
for(let i = 0; i < numButton.length; i++) {
   
    numButton[i].addEventListener('click', function(event) {
        a = event.target.value;
        a = a.toString();
        b += a;
        primaryNum.textContent = b;
        console.log(a);
    });
}

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    primaryNum.textContent = 0;
    firstNumber = 0;
    secondNumber = 0;
});

const equal = document.querySelector('#equal');
const add = document.querySelector('#addition');
add.addEventListener('click', ()=> {
    firstNumber = parseFloat(b);
    primaryNum.textContent = 0;

    for(let i = 0; i < numButton.length; i++) {
   
        numButton[i].addEventListener('click', function(event) {
            let c = event.target.value;
            c = c.toString();
            let d = '';
            d += c;
            primaryNum.textContent = b;
            secondNumber = parseFloat(d);
        });
    }

    equal.addEventListener('click', () =>{
        primaryNum.textContent = firstNumber + secondNumber;
    })
});


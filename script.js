const numberButtons = document.querySelectorAll('[data-num]');
const mainNum = document.querySelector('#ans');
const oppButtons = document.querySelectorAll('[data-opp]');
const prevAns = document.querySelector('#prevAns')
const equal = document.querySelector('#equal')
const clear = document.querySelector('#clear')

let opp = null;
let firstNum = '';
let secondNum = '';

numberButtons.forEach((button) => 
    button.addEventListener('click', () => primaryNum(button.textContent))
);

function primaryNum(number) {
    mainNum.textContent += number;
}

oppButtons.forEach((button) =>
    button.addEventListener('click', () => opperand(button.textContent))
);

function opperand(e){
    opp = e;
    firstNum = mainNum.textContent;
    prevAns.textContent = firstNum + ' '+ opp
    mainNum.textContent = '';
}

clear.addEventListener('click', () =>{
    mainNum.textContent = '';
    prevAns.textContent = '';
})

equal.addEventListener('click', () => {
    secondNum = mainNum.textContent;
    prevAns.textContent += ' '+ secondNum;
    if( opp === '+'){
        mainNum.textContent = add(firstNum, secondNum);
    }else if( opp === '-'){
        mainNum.textContent = sub(firstNum, secondNum);
    }else if( opp === 'x'){
        mainNum.textContent = mul(firstNum, secondNum);
    }else if( opp === '/'){
        mainNum.textContent = div(firstNum, secondNum);
    }else{
        mainNum.textContent = 'ERROR!';
    };
});

function add(a, b){
    return parseFloat(a) + parseFloat(b);
}

function sub(a, b){
    return parseFloat(a) - parseFloat(b);
}

function mul(a, b){
    return parseFloat(a) * parseFloat(b);
}

function div(a, b){
    return parseFloat(a) / parseFloat(b);
}



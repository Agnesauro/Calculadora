let currentInput = '0';
let calculationDone = false; // variável de verificação.
const displayElement = document.getElementById('display');
const historyElement = document.getElementById('history');


function updateDisplay(){
    displayElement.innerText = currentInput;

    if(currentInput.length >8){
        displayElement.classList.replace('text-5x1', 'text-3x1');
    }else{
        displayElement.classList.replace('text-3x1', 'text-5x1');
    }
}

// Verificação de controle: false adiciona apenas um número por vez. Caso contrário, fará as verificações se há casas decimais com ponto ou não. // 
function appendNumber(number){
    if(calculationDone){
        currentInput = number;
        calculationDone=false;
    }else{
        if (currentInput === '0' && number !=='.'){
            currentInput = number;
        }else{
            if (number === '.' && currentInput.includes('.'))
                return;
            currentInput += number;
        }
    }
    updateDisplay();
}

//Limpar o display ao clicar no AC//
function clearDisplay(){
    currentInput = '0';
    historyElement.innerText = '';
    calculationDone = false;
    updateDisplay();
}

function appendOperator(operator){
   if(calculationDone) calculationDone = false;
   const lastChar = currentInput[currentInput.length -1];
}
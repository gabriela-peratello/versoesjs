
// pega os inputs
const input01 = document.getElementById('valor01');
const input02 = document.getElementById('valor02');

// pega o container onde vai ter os resultados
const resultado = document.getElementById('resultado')

console.log(typeof input01.value);


function somar() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    //verifica se a números em branco
    if (isNaN(v1) || isNaN(v2)){
        alert('Valores inválidos. Digite um número.')
    } else {
        // mostra na area de resultado
        resultado.style.display = 'flex'
        // memoria de calculo
        resultado.innerHTML = `
        <h2>Memória de Cálculo</h2>
        <ul>
        <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 + v2}</span> </li>
        </ul>
        `
    }
}


function subtrair() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    //verifica se a números em branco
    if (isNaN(v1) || isNaN(v2)){
        alert('Valores inválidos. Digite um número.')
    } else {
        // mostra na area de resultado
        resultado.style.display = 'flex'
        // memoria de calculo
        resultado.innerHTML = `
        <h2>Memória de Cálculo</h2>
        <ul>
        <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} - ${v2} = <span>${v1 - v2}</span> </li>
        </ul>
        `
    }

}

function dividir() {
    const v1 = parseFloat(input01.value);
    const v2 = parseFloat(input02.value);
    //verifica se a números em branco
    if (isNaN(v1) || isNaN(v2)){
        alert('Valores inválidos. Digite um número.')
    } else {
        // mostra na area de resultado
        resultado.style.display = 'flex'
        // memoria de calculo
        resultado.innerHTML = `
        <h2>Memória de Cálculo</h2>
        <ul>
        <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} / ${v2} = <span>${v1 / v2}</span> </li>
        </ul>
        `
    }

}

function porcentagem() {
    

}

function calcPagVista() {


}

function calcPagPrazo() {

}

function limpar(){
   resultado.style.display='none', input01.value='', input02.value='', input01.focus();
}
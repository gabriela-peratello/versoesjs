function Somar() {
    const verificav1 = document.getElementById('valor01').value;
    const verificav2 = document.getElementById('valor02').value;
    // comparação do Tipo e Valor (===) || (===) compara apenas valores
    // || significa "ou"
    if (verificav1 === '' || verificav2 === '') {
        alert('Valor em branco. Digite um número.')
    } else {
        let v1 = parseFloat(document.getElementById('valor01').value)
        let v2 = parseFloat(document.getElementById('valor02').value)
        document.getElementById('resultado').style.display = 'flex';

        const resultado = document.getElementById('resultado');
        resultado.innerHTML =

            `
        <h2> Memória de cálculo</>

         <ul>
                <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} + ${v2} = <span>${v1 + v2}</span> </li>
        </ul> -->
        `;
    };
};

// esconde o container de resultado
function Limpar() {
    document.getElementById('resultado').style.display = 'none'

    document.getElementById('valor01').value = '';
    document.getElementById('valor02').value = '';

};

function Subtrair(){
    const verificav1 = document.getElementById('valor01').value;
    const verificav2 = document.getElementById('valor02').value;
    // comparação do Tipo e Valor (===) || (===) compara apenas valores
    // || significa "ou"
    if (verificav1 === '' || verificav2 === '') {
        alert('Valor em branco. Digite um número.')
    } else {
        let v1 = parseFloat(document.getElementById('valor01').value)
        let v2 = parseFloat(document.getElementById('valor02').value)
        document.getElementById('resultado').style.display = 'flex';

        const resultado = document.getElementById('resultado');
        resultado.innerHTML =

            `
        <h2> Memória de cálculo</>

         <ul>
                <li>Operação: <span>SOMA</span> </li>
                <li>Valor 01 digitado pelo usuário: <span> ${v1} </span> </li>
                <li>Valor 02 digitado pelo usuário: <span>${v2}</span> </li>       
                <li>O resultado da operação é ${v1} - ${v2} = <span>${v1 - v2}</span> </li>
        </ul> -->
        `;
    };
}
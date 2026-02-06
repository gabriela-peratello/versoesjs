function Somar() {
    
    let v1 = parseFloat(prompt('valor01'));

    alert(`O valor digitado foi ${v1}.`);
    let v2 = parseFloat(prompt('valor02'));
    alert(`O segundo valor digitado foi ${v2}.`)

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é ${v1 + v2}.`;
};


function Subtrair() {
    let n1 = parseFloat(prompt('valor01'));
    //template de str
    alert(`O valor digitado foi ${n1}.`);
    let n2 = parseFloat(prompt('valor02'));
    alert(`O segundo valor digitado foi ${n2}.`)

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é ${n1 - n2}.`;

};

function Multiplicar() {
    let n1 = parseFloat(prompt('valor01'));
    //template de str
    alert(`O valor digitado foi ${n1}.`);
    let n2 = parseFloat(prompt('valor02'));
    alert(`O segundo valor digitado foi ${n2}.`)

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é ${n1 * n2}.`;

};

function Dividir() {
    let n1 = parseFloat(prompt('valor01'));
    //template de str
    alert(`O valor digitado foi ${n1}.`);
    let n2 = parseFloat(prompt('valor02'));
    alert(`O segundo valor digitado foi ${n2}.`)

    document.getElementById('resultado').style.display = 'flex';
    document.getElementById('resultado').textContent = `O resultado é ${n1 / n2}.`;

};
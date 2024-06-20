const body = document.querySelector('body');
body.style.backgroundColor = 'white';
body.style.display = 'flex';
body.style.justifyContent = 'center';
body.style.alignItems = 'center';
body.style.minHeight = '100vh';
body.style.overflow = 'hidden';

const div2 = document.createElement('div');
div2.style.width = '1200px';
div2.style.height = '600px';
div2.style.display = 'flex';
div2.style.justifyContent = 'center';
div2.style.alignItems = 'center';
div2.style.backgroundColor = 'gray';
body.appendChild(div2);

const div_form = document.createElement('div');
const frm = document.createElement('form');

const inputElementText = document.createElement('input');
const inputElementBr = document.createElement('br');
const inputElementNumber1 = document.createElement('input');
const inputElementBr1 = document.createElement('br');
const inputElementNumber2 = document.createElement('input');
const inputElementBr2 = document.createElement('br');
const inputElementNumber3 = document.createElement('input');
const inputElementBr3 = document.createElement('br');
const inputElementSubmit = document.createElement('input');
const inputElementBr4 = document.createElement('br');
const inputElementBr6 = document.createElement('br');
const inputElementBr5 = document.createElement('h3');


inputElementText.type = 'text';
inputElementNumber1.type = 'number';
inputElementNumber2.type = 'number';
inputElementNumber3.type = 'number';
inputElementSubmit.type = 'submit';

inputElementText.placeholder = 'Digite seu nome';
inputElementNumber1.placeholder = 'Digite a primeira nota';
inputElementNumber2.placeholder = 'Digite a segunda nota';
inputElementNumber3.placeholder = 'Digite a terceira nota';
inputElementSubmit.value = 'Calcular Média';

inputElementText.id = 'inNome';
inputElementNumber1.id = 'inNumero1';
inputElementNumber2.id = 'inNumero2';
inputElementNumber3.id = 'inNumero3';


frm.appendChild(inputElementText);
frm.appendChild(inputElementBr);
frm.appendChild(inputElementNumber1);
frm.appendChild(inputElementBr1);
frm.appendChild(inputElementNumber2);
frm.appendChild(inputElementBr2);
frm.appendChild(inputElementNumber3);
frm.appendChild(inputElementBr3);
frm.appendChild(inputElementSubmit);
frm.appendChild(inputElementBr4);
frm.appendChild(inputElementBr6);
frm.appendChild(inputElementBr5);

div_form.appendChild(frm);

div2.appendChild(div_form);

frm.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = frm.inNome.value;
    const num1 = Number(frm.inNumero1.value);
    const num2 = Number(frm.inNumero2.value);
    const num3 = Number(frm.inNumero3.value);
    const media = (num1 + num2 + num3) / 3;

    if (media >= 10) {
        resp.innerHTML = `${nome}. UAU! Parabéns Top, aprovado! Média é ${media.toFixed(1)}`;
        resp.style.color = 'blue';
    } else if (media >= 7) {
        resp.innerHTML = `${nome}. Parabéns, aprovado! Média é ${media.toFixed(1)}`;
        resp.style.color = 'green';
    } else if (media <= 3) {
        resp.innerHTML = `${nome}. Está reprovado. Média é ${media.toFixed(1)}`;
        resp.style.color = 'red';
    } else {
        resp.innerHTML = `${nome}. Recuperação. Média é ${media.toFixed(1)}`;
        resp.style.color = 'yellow';
    }
});

const resp = document.createElement('h3');
div_form.appendChild(resp);

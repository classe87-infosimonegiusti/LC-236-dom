const nome = prompt('Come ti chiami?');
const sesso = prompt('Sei maschio o femmina?');

const domElement = document.querySelector('#saluto');

domElement.innerHTML = `Ciao ${nome}`;

if (sesso == 'f') {
    domElement.classList.add('rosa'); 
} else if (sesso == 'm') {
    domElement.classList.add('blu');
} else {
    domElement.classList.add('verde');
}
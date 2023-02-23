
//con uso di getElementById
const domElement = document.getElementById('element');

//con uso di querySelecto
const domElementQuery = document.querySelector('#element');

/*
domElement.className = 'rosso'; //assegno una classe specifica e sovrascrivo le precedenti
domElement.className = domElement.classList + ' blu'; //aggiungo una classe a quelle preesistenti

domElement.classList.remove('rosso'); //rimuovo una classe specifica
domElement.classList.add('verde'); //aggiungi una classe specifica senza danneggiare le precedenti
*/

domElement.style.color = "red";

domElement.innerHTML += " Mondo!";
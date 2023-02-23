const domElement = document.querySelector('#generatoreCasuale');

domElement.addEventListener('click', 
    function() {
        const numeroCasuale = Math.floor((Math.random() * 901)) + 100;
        alert(numeroCasuale);
    }
);
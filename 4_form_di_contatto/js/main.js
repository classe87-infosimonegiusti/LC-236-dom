const domButton = document.querySelector('#leggiForm');

domButton.addEventListener('click', 
    function () {
        const messaggioDom = document.getElementById('messaggio');
        const testoDelMessaggio = messaggioDom.value;
        alert(testoDelMessaggio);

        const casellaSelezioneDom = document.getElementById('casellaSelezione');
        alert(casellaSelezioneDom.value);
    }
);

const domReset = document.querySelector('#resettaForm');

domReset.addEventListener('click', 
    function() {
        const messaggioDom = document.getElementById('messaggio');
        messaggioDom.value = "";
    }
);
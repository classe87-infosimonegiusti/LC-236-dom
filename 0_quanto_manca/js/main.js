
const oraDataAttuale = new Date();
const minutoAttuale = oraDataAttuale.getMinutes();
document.getElementById('minuti').innerHTML = 60 - minutoAttuale;
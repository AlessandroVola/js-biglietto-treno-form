var kmDaPercorrere = parseInt(prompt("Quanti km devi percorrere?"));
var prezzoAlKm = 0.21;
var prezzoBigliettoNormale = kmDaPercorrere * prezzoAlKm;

console.log(prezzoBigliettoNormale.toFixed(2) + " euro = costo biglietto senza sconti")

var etaUtente = parseInt(prompt("Quanti anni hai?"))


// sconto 20% minorenni e 40% over 65
if (!isNaN(kmDaPercorrere) && !isNaN(etaUtente)) {
    if (etaUtente < 18) {
        document.getElementById("biglietto_treno").innerHTML = "Il tuo biglietto costa " + ((prezzoBigliettoNormale / 100) * 80).toFixed(2) + " euro"
    }
    else if (etaUtente > 65) {
        document.getElementById("biglietto_treno").innerHTML = "Il tuo biglietto costa " + ((prezzoBigliettoNormale / 100) * 60).toFixed(2) + " euro"
    }
    else {
        document.getElementById("biglietto_treno").innerHTML = "Il tuo biglietto costa " + prezzoBigliettoNormale.toFixed(2) + " euro"
    }
}
else {
    document.getElementById("biglietto_treno").innerHTML = "Dati inseriti sbagliati"
}



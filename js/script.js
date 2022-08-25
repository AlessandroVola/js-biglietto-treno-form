
const ticketHTMLbutton = document.getElementById("button-create")
// click su genera

ticketHTMLbutton.addEventListener('click', function () {
    // km che deve fare l'utente
    var inputKmDaPercorrere = document.getElementById("km");
    console.log(inputKmDaPercorrere.value);
    var kmDaPercorrere = parseInt(inputKmDaPercorrere.value);


    // età utente
    const inputEta = document.getElementById("age");
    const age = (inputEta.value)


    // nome e cognome utente
    var nameSurname = document.getElementById("nameSurname");




    const prezzoAlKm = 0.21;
    var prezzoBigliettoNormale = kmDaPercorrere * prezzoAlKm;

    console.log(prezzoBigliettoNormale)






    // sconto 20% minorenni e 40% over 65
    if (!isNaN(kmDaPercorrere) && !isNaN(age)) {
        if (age = "minorenne") {
            document.getElementById("biglietto_treno").innerHTML = "Il tuo biglietto costa " + ((prezzoBigliettoNormale / 100) * 80).toFixed(2) + " euro"
        }
        else if (age = "over 65") {
            document.getElementById("biglietto_treno").innerHTML = "Il tuo biglietto costa " + ((prezzoBigliettoNormale / 100) * 60).toFixed(2) + " euro"
        }
        else {
            document.getElementById("biglietto_treno").innerHTML = "Il tuo biglietto costa " + prezzoBigliettoNormale.toFixed(2) + " euro"
            //     }
        }

    }
})


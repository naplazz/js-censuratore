/* CENSURATORE
- Il software riceve in input un lungo testo e una serie di parole da censurare.
- Restituisce il testo con xxx al posto delle parole censurate.
- Stampa un “badword index” calcolato come il numero di parole censurate su il numero di parole totali
==================================================================================== */

// creo il prompt che mi richiede il testo e lo inserisce in una variabile e la splitta in un array

function textAndSplit() {
  var text = prompt("inserisci il testo");
  var splTxt = text.split(" ");
  return splTxt;

}



// creo un prompt che mi richiede 5 parole da censurare e le inserisco in un array
function censored() {
  var badWord = prompt("inserisci il testo");
  var splBadWord = badWord.split(" ");
  return splBadWord;
}

var arrayTesto = textAndSplit();
var conteggioParole = arrayTesto.length;
var arrayCensurate = censored();
var paroleCensurate = 0;
for (var i = 0; i < arrayTesto.length; i++) {
  for (var x = 0; x < arrayCensurate.length; x++) {
    if (arrayTesto[i] == arrayCensurate[x]){
      arrayTesto[i] = "xxx";
      paroleCensurate++;
    }
  }

}
// stampo il testo sostituendo xxx alle parole censurare e riunisce il testo

var testoCensurato = arrayTesto.join(" ");
console.log(testoCensurato);
console.log("Sono state censurare " + paroleCensurate + " su " + conteggioParole + " parole inserite" );
//  stampo il conteggio delle parole censurate

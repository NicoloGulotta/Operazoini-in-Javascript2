//ESERCIZI SUGLI IF: 





/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
 */
let a = 5;
let b = 3;
let maggiore;
if (a > b) {
  maggiore = a;
} else {
  maggiore = b;
}
console.log("il maggiore è " + maggiore);




/*ESERCIZIO 2
  Crea un blocco condizionale if/else per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 21;
if (num < 10) {
  console.log("Tiny");
} else if (num < 10) {
  console.log("Small");
} else if (num < 15) {
  console.log("Medium");
} else if (num < 20) {
  console.log("Large");
} else if (num >= 20) {
  console.log("Huge");
}




//ESERCIZI SUI CICLI:
/* ESERCIZIO 3
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8 (suggerimento: ripassa l'uso di "continue").
*/

for (let step = 0; step < 11; step++) {

  if (step === 3) {
    continue;
  }
  if (step === 8) {
    continue;
  }
  console.log(step);
}
/* ESERCIZIO 4
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

let step2 = 15;
if (step2 % 2 === 0) {
  console.log(step2 + " pari");
} else {
  console.log(step2 + " dispari")
}

//ESERCIZI EXTRA NON OBBLIGATORI

/* ESERCIZIO EXTRA 1
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let d = 3;
let e = 5;
let somma = d + e;
let differenza = d - e;
if (d === 8) {
  console.log("questo è x")
} else if (e === 8) {
  console.log("questo è y")
} else if (somma === 8) {
  console.log("questa è la somma")
} else if (differenza === 8) {
  console.log("questa è la differanza")
} else {
  console.log("Nessuna soluzione è corretta")
}




/* ESERCIZIO EXTRA 2
Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 40;
let total;
if (totalShoppingCart >= 50) {
  (total = totalShoppingCart)
  console.log(total);
} else {
  (total = totalShoppingCart + 10)
  console.log(total)
}

/* ESERCIZIO EXTRA 3
  Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando, usando l'algoritmo del codice precedente, se le spedizioni siano gratuite oppure no e e calcolando il totale.
*/

let totalShoppingCart1 = 50;
let Total1;
if (totalShoppingCart1 >= 50) {
  (Total1 = totalShoppingCart1 * 0.8)
  console.log(Total1);
} else {
  (Total1 = totalShoppingCart1 * 0.8 + 10)
  console.log(Total1)
}

/*  ESERCIZIO EXTRA 4
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile booleana chiamata isMale.
  Es. se isMale e' vero, il valore di gender deve essere "male"
*/

let isMale = true;
let gender = (isMale) ? "male" : "female"
console.log(gender)

/* ESERCIZIO EXTRA 5
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia è multiplo di 3 (operatore modulo!), stampa al suo posto la parola "Fizz" e se il numero è multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/
for (let x = 0; x <= 100; x++)
  if (x === 0) {
    console.log(x)
  } else if ((x % 3 === 0) && (x % 5 === 0)) {
    console.log("FizzBuzz")
  }else if(x % 3 === 0) {
    console.log("Fizz")
  }else if(x % 5 === 0) {
    console.log("Bizz")
  }
// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function checkArray(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];

    if (value > 5) {
      console.log(value + " è maggiore di 5");
      sum += value;
    } else {
      console.log(value + " NON è maggiore di 5");
    }
  }

  return sum;
}

const randomArray = giveMeRandom(10);
console.log("Array casuale:", randomArray);
console.log("Somma dei valori > 5:", checkArray(randomArray));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  { price: 10, name: "Prodotto A", id: 1, quantity: 2 },
  { price: 5, name: "Prodotto B", id: 2, quantity: 4 },
  { price: 20, name: "Prodotto C", id: 3, quantity: 1 },
];

function shoppingCartTotal() {
  let total = 0;

  for (let i = 0; i < shoppingCart.length; i++) {
    total += shoppingCart[i].price * shoppingCart[i].quantity;
  }

  return total;
}

console.log("Totale carrello:", shoppingCartTotal());

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function addToShoppingCart(newItem) {
  shoppingCart.push(newItem);

  let totalItems = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    totalItems += shoppingCart[i].quantity;
  }

  return totalItems;
}

const newProduct = { price: 15, name: "Prodotto D", id: 4, quantity: 3 };
console.log("Totale elementi dopo aggiunta:", addToShoppingCart(newProduct));
console.log("Nuovo carrello:", shoppingCart);

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function maxShoppingCart(cart) {
  if (cart.length === 0) {
    return null;
  }

  let maxItem = cart[0];

  for (let i = 1; i < cart.length; i++) {
    if (cart[i].price > maxItem.price) {
      maxItem = cart[i];
    }
  }

  return maxItem;
}

console.log("Oggetto più costoso:", maxShoppingCart(shoppingCart));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function latestShoppingCart(cart) {
  if (cart.length === 0) {
    return null;
  }
  return cart[cart.length - 1];
}

console.log("Ultimo elemento del carrello:", latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function loopUntil(x) {
  let count = 0;

  while (count < 3) {
    const randomNum = Math.floor(Math.random() * 10);
    console.log("Numero casuale:", randomNum);

    if (randomNum > x) {
      count++;
    } else {
      count = 0;
    }
  }

  console.log("Condizione soddisfatta: 3 numeri consecutivi > " + x);
}

console.log("Esecuzione loopUntil(5):");
loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function average(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (typeof value === "number" && !isNaN(value)) {
      sum += value;
      count++;
    }
  }

  if (count === 0) {
    return 0;
  }

  return sum / count;
}

console.log("Media [1, 2, 3, 4]:", average([1, 2, 3, 4]));
console.log("Media [1, 'ciao', 5, null, 9]:", average([1, "ciao", 5, null, 9]));
console.log("Media ['a', 'b'] (nessun numero):", average(["a", "b"]));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function longest(strings) {
  let longestStr = "";

  for (let i = 0; i < strings.length; i++) {
    const s = strings[i];
    if (typeof s === "string" && s.length > longestStr.length) {
      longestStr = s;
    }
  }

  return longestStr;
}

console.log("Stringa più lunga:", longest(["ciao", "javascript", "EPICODE", "prova"]));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function spamFilter(emailContent) {
  const text = emailContent.toUpperCase();
  return !text.includes("SPAM") && !text.includes("SCAM");
}

console.log(spamFilter("Ciao, questa è una normale email."));
console.log(spamFilter("Hai vinto un premio, NON è SPAM tranquillo!"));
console.log(spamFilter("Attenzione, potrebbe essere uno SCAM."));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function daysPassed(date) {
  const givenDate = new Date(date);
  const today = new Date();

  const diffMs = today - givenDate;
  const msPerDay = 1000 * 60 * 60 * 24;

  return Math.floor(diffMs / msPerDay);
}
console.log("Giorni passati dal 1 gennaio 2024:", daysPassed("2024-01-01"));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function matrixGenerator(x, y) {
  const matrix = [];

  for (let i = 0; i < y; i++) {
    const row = [];
    for (let j = 0; j < x; j++) {
      row.push("" + i + j);
    }
    matrix.push(row);
  }

  return matrix;
}
const matrix = matrixGenerator(3, 2);
console.log("matrixGenerator(3, 2):", matrix);
matrix.forEach((row) => console.log(row));

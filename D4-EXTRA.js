// Esercizi aggiuntivi (facoltativi) per D4

const giveMeRandom = function (n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 10));
  }
  return arr;
};

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const checkArray = function (arr) {
  console.log(arr);
  const gtFive = [];
  for (let i = 0; i < arr.length; i++) {
    const elem = arr[i];
    if (elem > 5) {
      console.log(elem);
      gtFive.push(elem);
    }
  }

  let sum = 0;
  for (let i = 0; i < gtFive.length; i++) {
    sum += gtFive[i];
  }

  return sum;
};

console.log(checkArray(giveMeRandom(10)));
/* SCRIVI QUI LA TUA RISPOSTA */

const shoppingCart = [
  { price: 5, name: "foo", id: "9129823", quantity: 10 },
  { price: 1000, name: "bar", id: "79322323", quantity: 5 },
  { price: 50, name: "baz", id: "07674563", quantity: 1 },
  { price: 25, name: "yoo", id: "6834589", quantity: 100 },
];

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCartTotal = function (cart) {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    const elem = cart[i];

    if (elem.quantity > 1) {
      sum += elem.price * elem.quantity;
    } else {
      sum += elem.price;
    }
  }
  return sum;
};

console.log(shoppingCartTotal(shoppingCart));

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const addToShoppingCart = function (cart, cartItem) {
  cart.push(cartItem);
  return cart.length;
};

console.log(addToShoppingCart(shoppingCart, { price: 5, name: "yolo", id: "111114589", quantity: 10 }));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const maxShoppingCart = function (cart) {
  let maxItemIndex = 0;
  for (let i = 0; i < cart.length; i++) {
    const elem = cart[i];

    if (elem.price > cart[maxItemIndex].price) {
      maxItemIndex = i;
    }
  }
  return cart[maxItemIndex];
};

console.log(maxShoppingCart(shoppingCart));
/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const latestShoppingCart = function (cart) {
  // return cart[cart.length - 1]
  return cart.at(-1);
};

console.log(latestShoppingCart(shoppingCart));

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const loopUntil = function (int) {
  let counter = 3;
  if (int >= 0 && int <= 9) {
    while (counter > 0) {
      const randNum = Math.floor(Math.random() * 10);
      console.log(counter, int, randNum);
      if (randNum > int) {
        console.log("TROVATO: ", randNum);
        counter--;
      }
    }
  } else {
    console.log("sei fuori soglia: numeri da 0 a 9");
  }
};

loopUntil(5);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const average = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = parseInt(arr[i]);
    if (typeof num === "number" && !isNaN(num)) {
      sum += num;
    }
  }

  return sum / arr.length;
};

console.log("AVG", average(["b2", 4, 6]));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const longest = function (arr) {
  let longer = "";
  for (let i = 0; i < arr.length; i++) {
    const str = arr[i];

    if (str.length > longer.length) {
      longer = str;
    }
  }
  return longer;
};

console.log(longest(["ciao", "EPICODE", "coders", "!"]));
/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const antiSpam = function (emailContent) {
  const words = emailContent.split(" ");
  let foundIt = false;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    console.log(word.toUpperCase());
    if (word.toUpperCase() === "SPAM" || word.toUpperCase() === "SCAM") {
      foundIt = true;
    }
  }

  return !foundIt;
};

console.log("Siamo salvi da SPAM e SCAM: ", antiSpam("ciao sono uno scam, il tuo peggior incubo"));

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function howManyDays(date) {
  const now = new Date();
  const pastDate = new Date(date);
  const pastTime = pastDate.getTime();
  const difference = now - pastTime;
  const noOfDaysPassed = parseInt(difference / (1000 * 60 * 60 * 24));

  return noOfDaysPassed;

  // CONDENSED VERSION
  // const now = new Date();
  // return parseInt((now - new Date(date)) / (1000 * 60 * 60 * 24));
}
console.log(howManyDays("07 Sep 2020"));

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function generateMatrix(n1, n2) {
  let rows = 0;
  for (let i = 0; i < n2; i++) {
    let line = [];
    rows++;

    for (let j = 0; j < n1; j++) {
      if (rows >= i) line.push(`"${i}${j}"`);
    }
    console.log((i === 0 ? "[" : "") + line.join(", ") + (i === n2 - 1 ? "]" : ","));
  }
}

generateMatrix(4, 2);

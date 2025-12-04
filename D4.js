/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}

console.log(area(5, 10));
console.log(area(3, 7));
console.log(area(8, 2));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(n1, n2) {
  const sum = n1 + n2;

  if (n1 === n2) {
    return sum * 3;
  } else {
    return sum;
  }
}

console.log(crazySum(3, 5));
console.log(crazySum(4, 4));
console.log(crazySum(10, 2));
console.log(crazySum(7, 7));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazyDiff(num) {
  const dif = Math.abs(num - 19);
  if (num > 19) {
    return dif * 3;
  } else return dif;
}

console.log(crazyDiff(10));
console.log(crazyDiff(19));
console.log(crazyDiff(20));
console.log(crazyDiff(25));
console.log(crazyDiff(5));
console.log(crazyDiff(30));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}

console.log(boundary(10));
console.log(boundary(20));
console.log(boundary(50));
console.log(boundary(100));
console.log(boundary(150));
console.log(boundary(400));

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function epify(str) {
  if (str.toLowerCase().startsWith("epicode")) {
    return str;
  }
  return "EPICODE " + str;
}

console.log(epify("Ciao a tutti"));
console.log(epify("EPICODE JavaScript è bello"));
console.log(epify("epicode school è forte"));
console.log(epify("Corso di programmazione"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(n) {
  if (n <= 0) {
    return false;
  }
  return n % 3 === 0 || n % 7 === 0;
}
console.log(check3and7(3));
console.log(check3and7(7));
console.log(check3and7(21));
console.log(check3and7(10));
console.log(check3and7(0));
console.log(check3and7(-5));

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("EPICODE"));
console.log(reverseString("JavaScript"));
console.log(reverseString("ciao"));
console.log(reverseString("abacaba"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function upperFirst(str) {
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (word.length > 0) {
      const firstLetter = word[0].toUpperCase();

      const rest = word.substring(1);

      words[i] = firstLetter + rest;
    }
  }

  return words.join(" ");
}

console.log(upperFirst("ciao mondo"));
console.log(upperFirst("epicode javascript exercise"));
console.log(upperFirst("questa è una prova"));
console.log(upperFirst("  spazi   doppi test "));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function cutString(str) {
  if (str.length <= 2) {
    return "";
  }
  return str.slice(1, -1);
}

console.log(cutString("ciao"));
console.log(cutString("EPICODE"));
console.log(cutString("ab"));
console.log(cutString("a"));
console.log(cutString("test"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function giveMeRandom(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    const randomNum = Math.floor(Math.random() * 11); // 0-10 inclusi
    arr.push(randomNum);
  }
  return arr;
}

console.log(giveMeRandom(5));

console.log(giveMeRandom(10));

const numeriCasuali = giveMeRandom(7);
console.log("Array di numeri casuali:", numeriCasuali);

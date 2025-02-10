/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
//I principali datatype sono:
//stringa: sono assegnazioni di valore date alle variabili in questo caso
//circondate da virgolette, esempio: let "Pomodoro" il nome all'inerno dei
//trattini è proprio una stringa
//Numeri: è un'altra assegnazione di valore che comprende solo i numeri e
//viene inserita senza trattini, esempio: Let number 100
//booleani: esprime un valore logico di vero o falso, esempio: Let
//canyoudrive= true
//undelfined: significa nessun valore dato alla variabile, se diciamo let
// brown e non mettiamo il suo valore il browser come risposta una volta
// ispezionato ci darà un type undefined
// null è l'ultimo datatype è da un valore di vuoto assoluto a qualsiasi
//varibile corrisposta

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName 
myName = "massimo"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let number = 12
let number1 = 20 
number + number1

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/



/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12
console.log (x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "attardi"
/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/


/* SCRIVI QUI LA TUA RISPOSTA */
x = x - 4
console.log (x)


/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
 
/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "jonh"
let name2 = "Jonh"
name1= name1 === name2
console.log (name1) //false

console.log( name1 === name2)
console.log(name1.toLowerCase === name2.tolowwercase)
 


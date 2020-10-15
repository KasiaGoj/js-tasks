/* Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas wywoływania funkcji.

Funkcja ma dodawać, odejmować i mnożyć liczby przekazane do parametrów i wyświetlać w konsoli następujące stringi:

1. "Wynik dodawania wynosi x"
2. "Wynik odejmowania wynosi x"
3. "Wynik mnożenia wynosi x"

Gdzie x jest wynikiem danego działania.

Natomiast jeżeli wynikiem jest liczba ujemna, w konsoli powinien pojawić się string:
"Wynik jest nieprawidłowy" */

number1 = 4;
number2 = 7;

/* 
define:
let add = num1 + num2;
let multiply = num1 * num2;
let substract = num1 - num2;


define strings to be displayed:

'Wynik dodawania wynosi' + ' ' + add
'Wynik odejmowania wynosi' + ' ' + substract
'Wynik mnożenia wynosi' + ' ' + multiply

if add || substract || multiply < 0 
display 'Wynik jest nieprawidłowy'
*/

function complicated(num1, num2)

{
let suma = num1 + num2;
if(suma>0) {
    console.log("Wynikiem dodawania jest " + suma);
} else {
    console.log("Wynik jest nieprawidłowy")
}
let substract = num1 - num2;
if(substract>0){
    console.log('Wynik odejmowania wynosi ' + substract);
} else {
    console.log("Wynik jest nieprawidłowy") 
}

let product = num1*num2;
if(product>0) {
    console.log("Wyniekim mnozenia jest " + product); 
} else {
    console.log("Wynik jest nieprawidłowy") 
}
}

complicated (number1,number2);

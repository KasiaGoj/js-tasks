/* Zdeklaruj dwie zmienne o dowolnych nazwach, do których przypisz kolejne stringi:
1. "Uwielbiam JavaScript"
2. "Jestem świetnym programistą"

Napisz funkcję, która przyjmuje stworzone zmienne jako parametry. Funkcja ma zwracać string, który jest dłuższy. Wynik działania funkcji wyświetl w konsoli. */

let first = "Uwielbiam JavaScript";

let second = "Jestem świetnym programistą";

function choseLonger (string1, string2) {
    if (string1.length > string2.length) {
       return string1;
    } else {
       return string2;
    }
}

console.log(choseLonger(first,second));
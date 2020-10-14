/* Zdeklaruj zmienną o dowolnej nazwie i przypisz do niej tablicę składającą się z 5 liczb.

Napisz funkcję, która przyjmuje tablicę jako parametr. Funkcja ma zwracać pierwszy element tablicy.
Wynik działania funkcji wyświetl w konsoli. */

let tablica = [10, 3, 2, 5, 6, 8,10]

function firstElement(array) {
    let result = array[0];
    return result
}

console.log(firstElement(tablica))
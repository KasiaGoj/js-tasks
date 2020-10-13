/* 2. W pliku main.js zdeklaruj dwie zmienne o nazwie:
- "firstNumber"
- "secondNumber"

3. Przypisz do nich dowolne liczby.
4. Następnie napisz funkcję, która przyjmuje dwa parametry - stworzone przez Ciebie zmienne.
5. Ma ona zwracać (return) sumę tych parametrów. */

let firstNumber = 4085;

let secondNumber = 198;


function sumOfNumbers (num1, num2) {
    let result = num1 + num2;
    return result;
}

console.log(sumOfNumbers(firstNumber, secondNumber)) 
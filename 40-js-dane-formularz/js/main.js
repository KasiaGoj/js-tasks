/* Twoim zadaniem jest stworzyć funkcję uruchamianą po kliknięciu buttona.

Funkcja powinna pobierać dane z value inputa i wstawiać je do odpowiednich paragrafów.
Należy użyć do tego metody JavaScript .value

Przykład:

var nazwa = document.getElementById("nazwa-id");
console.log(nazwa.value);
Dodatkowo do projektu dołącz plik css, w którym nadaj dowolny wygląd Twojej stronie. */

function myFunction() {
    let x = document.getElementById("fname").value;
    document.getElementById("name").innerHTML = x;

    let y = document.getElementById("lname").value;
    document.getElementById("surname").innerHTML = y;

    let p = document.getElementById("tel").value;
    document.getElementById("phone").innerHTML = p;

  }

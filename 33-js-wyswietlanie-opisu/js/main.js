/* W pliku main.js stwórz zmienną o dowolnej nazwie i przypisz do niej paragraf przy użyciu

document.getElementById("nazwa-id");
Następnie stwórz kolejną zmienną i przypisz do niej button (przy użyciu document.querySelector)

Do buttona dodaj zdarzenie onclick, po którym zostanie wywołana funkcja.

Funkcja ma dodać do paragrafu opis (dowolny tekst). */

let x = document.getElementById("opis");

let myButton = document.querySelector('button');

myButton.onclick = function () {
    x.textContent = 'dowolna treść';
}
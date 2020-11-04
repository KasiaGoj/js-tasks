/* Napisz skrypt, który po kliknięciu w przycisk doda kolejny element do listy z nazwą zakończoną liczbą kolejnego elementu - np. Item 4, Item 5, Item 6 itd.
Każdemu z elementów listy ustaw klasę "item"

Zadanie domowe robimy z wykorzystaniem serwisu https://repl.it

Podpowiedź przed wysłaniem zadania do sprawdzenia:
- napisz funkcję obsługującą klik przycisku button
- musisz pobrać obecną ilość item'ów w liście, aby dodać numer kolejnego
- musisz stworzyć w JavaScript nowy element w HTML i dodać go do listy używając odpowiedniej do tego metody w JS :) */

// let liElement = document.createElement('li');
// let textNode = document.createTextNode('tekst');
// liElement.appendChild(textNode);

// document.getElementById('items').appendChild(liElement);

let button = document.querySelector('button').addEventListener('click', ()=>{
    let liElement = document.createElement('li');
 
    liElement.innerText = 'Item ' + (document.getElementsByClassName('item').length + 1);
    liElement.className = "item";

    document.querySelector('ul').appendChild(liElement);
});
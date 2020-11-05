/* Napisz funkcję, która będzie obsługiwać zdarzenie submit formularza i podepnij ją do elementu formularza jako funkcję zwrotną (ang. callback) obsługującą to zdarzenie.

Następnie podczas wysyłania formularza:

Zablokuj jego domyślne działanie (aby formularz się NIE wysyłał)
Pobierz wartości obydwu pól formularza do zmiennych (czyli z atrybutami name równymi fname i lname)
Wyświetl pobrane wartości pól formularza w konsoli. */

let formName = document.getElementById('form');

console.log(formName);

const submitForm = (event) => {
    event.preventDefault();
    
    let firstName =  document.querySelector('[name="fname"]');
    let lastName = document.querySelector('[name="lname"]');

    console.log(`Imię: ${firstName.value}, Nazwisko: ${lastName.value}`);
}

formName.addEventListener('submit', submitForm);
/* Stwórz funkcję validate(), która będzię uruchamiana przed wysłaniem formularza.

Funkcja validate() ma sprawdzać:

czy zostało wypełnione pole tekstowe Imie i nazwisko
czy zostało wypełnione pole tekstowe Adres e-mail
czy adres email zawiera znak @
czy został zaznaczony checkbox ze Zgodą marketingową 1
W przypadku, gdy któreś z powyższych wymagań nie zostało spełnione, skrypt ma informować internautę o tym jako lista z błędami do poprawy.

Checkbox Wszystkie zgody po zaznaczeniu ma automatycznie zaznaczać pozostałe checkboxy (tj. Zgoda marketingowa 1 i Zgoda marketingowa 2) i wyłączać możliwość ich odznaczenia.

Natomiast po odznaczeniu checkbox’a Wszystkie zgody pozostałe checkboxy (tj. Zgoda marketingowa 1 i Zgoda marketingowa 2) mają zostać także odznaczone i ma zostać włączona możliwość ich osobnego zaznaczania. */

let newsletterForm = document.getElementById('newsletter');

let allAgreeChx = document.getElementById('consent');

const validate = (event) => {

    let nameTxt = document.getElementById('name');
    let emailTxt = document.getElementById('email');
    let agree1 = document.getElementById('consent2');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (nameTxt.value.trim() === '') {
        let liError =document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko';

        errors.appendChild(liError);
    }

    if (emailTxt.value.trim() === '') {
        let liError =document.createElement('li');
        liError.innerText = 'Podaj email';

        errors.appendChild(liError);
    }

    if (!emailTxt.value.includes('@') ) {
        let liError =document.createElement('li');
        liError.innerText = 'Podaj poprawny email np. imienazwisko@email.com';

        errors.appendChild(liError);
    }

    if (!agree1.checked) {
        let liError =document.createElement('li');
        liError.innerText = 'Nie wyraziłeś zgody marketingowej 1';

        errors.appendChild(liError);
    }

    if (errors.children.length > 0){
        event.preventDefault();
    }

}

const allAgree = (event) => {
    let agree1 = document.getElementById('consent2');
    let agree2 = document.getElementById('consent3');

    agree1.checked = event.target.checked;
    agree2.checked = event.target.checked;

    agree1.disabled = event.target.checked;
    agree2.disabled = event.target.checked;

    console.log(event.target.checked);
}

newsletterForm.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', allAgree)



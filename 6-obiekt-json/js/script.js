// {
//     "pracownicy": [
//         {"firstName": "Krystian", "lastName": "Dziopa"}, 
//         {"firstName": "Anna", "lastName": "Szapiel"},
//         {"firstName": "Piotr", "lastName": "Żmuda"}
//     ]
// }

// Pobierz do zmiennej jsonPracownicy poniższy obiekt:

let jsonPracownicy = {
    "pracownicy":[
        {"firstName": "Krystian", "lastName": "Dziopa"}, 
        {"firstName": "Anna", "lastName": "Szapiel"},
        {"firstName": "Piotr", "lastName": "Żmuda"}
    ]
};

//Wyświetl go w konsoli,
console.log(jsonPracownicy);

//a następnie za pomocą pętli forEach przeiteruj po każdym pracowniku
for (let pracownik of jsonPracownicy.pracownicy) {
    console.log(pracownik);
  }

//oraz wyświetl w konsoli index elementu tablicy oraz imie i nazwisko pracownika.
let listaPracownikow = '{ "pracownicy" : [ {"firstName": "Krystian", "lastName": "Dziopa"}, {"firstName": "Anna", "lastName": "Szapiel"},  {"firstName": "Piotr", "lastName": "Żmuda"} ] }';

console.log(JSON.parse(listaPracownikow));
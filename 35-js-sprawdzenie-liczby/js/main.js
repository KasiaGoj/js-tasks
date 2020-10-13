/* Napisz funkcję, która przyjmuje jako parametr liczbę n.
Dowolną liczbę należy przekazać do parametru podczas wywoływania funkcji.

Funkcja ma sprawdzać, czy liczba n znajduje się w przedziale 100-200.
Jeżeli tak, w konsoli ma wyświetlić się napis "Liczba znajduje się w przedziale".
Jeżeli nie, w konsoli pojawi się "Liczba nie znajduje się w przedziale". */



function check_number(n) 
  {
  if (n >= 50 && n <= 99)
  {
    console.log("Liczba znajduje się w przedziale");
  } 
  else 
  {
    console.log("Liczba nie znajduje się w przedziale");
  }
}

console.log(check_number(76));
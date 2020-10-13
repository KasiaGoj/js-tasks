/* Napisz funkcję, która przyjmuje jako parametry dwie liczby, które przekażesz podczas wywoływania funkcji.

Funkcja ma zwracać true, jeśli jedna z liczb jest równa 20 lub jeśli suma tych dwóch liczb jest mniejsza lub równa 20. */

function check_numbers(x, y) 
  {
  if (x == 20 || y == 20 || (x + y)<=20 )
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(check_numbers(5, 7));
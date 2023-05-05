//Problem 3 - Bilangan Prima
//Dalam matematika, bilangan prima adalah bilangan asli yang lebih besar dari angka 1, yang faktor
//pembaginya adalah 1 dan bilangan itu sendiri. 2 dan 3 adalah bilangan prima. 4 bukan bilangan prima
//karena 4 bisa habis dibagi 2. Kamu diminta untuk membuat fungsi untuk menentukan bahwa sebuah bilangan
//termasuk bilangan prima atau tidak.

function primeNumber(number) {
  let i = number;
  if (number < 1) {
    return "false";
  }
  if (number === 1 || number === 2 || number === 3 || number === 5) {
    return "true";
  }
  if (number % i === 0) {
    if (number % 2 === 0 || number % 3 === 0 || number % 5 === 0) {
      return "false";
    } else {
      return "true";
    }
  }
}
console.log(primeNumber(11));
console.log(primeNumber(13));
console.log(primeNumber(17));
console.log(primeNumber(20));
console.log(primeNumber(35));

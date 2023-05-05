//Problem 4 - Palindrome
//Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, "katak" dibalik tetaplah
//"katak". Buatlah sebuah program untuk mendeteksi sebuah string merupakan palindrom atau tidak !

function palindrome(string) {
  if (string[0] === string[string.length - 1]) {
    if (string[1] === string[string.length - 2]) {
      return "true";
    } else {
      return "false";
    }
  }
  if (string.length <= 1) {
    return "true";
  } else {
    return "false";
  }
}
console.log(palindrome("katak"));
console.log(palindrome("kasur rusak"));
console.log(palindrome("kotak"));
console.log(palindrome("lion"));
console.log(palindrome("kupu-kupu"));
console.log(palindrome("a"));

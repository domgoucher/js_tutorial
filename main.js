let Phrase = require("domgoucher-palindrome");

function palindromeTester(event) {
  event.preventDefault();
  
  let phrase = new Phrase(event.target.phrase.value);

  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a palindrome!`;
  } else {
    palindromeResult.innerHTML = `"<strong>${phrase.content}</strong>" is a not palindrome!`;
  }
}
document.addEventListener("DOMContentLoaded", function () {
  let tester = document.querySelector("#palindromeTester");
  tester.addEventListener("submit", function(event) {
    palindromeTester(event);
  });
});

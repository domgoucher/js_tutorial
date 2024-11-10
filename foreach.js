let a = ["ant", "bat", "cat", 42];
a.forEach(function(element) {
  console.log(element);
});

let soliloquy = "To be, or not to be, that is the question:";
Array.from(soliloquy).forEach(function(character) {
  console.log(character);
});

// Fat Arrow style
Array.from(soliloquy).forEach((character) => {
  console.log(character);
});

a = [8, 99, 42, 17];
a.sort(function(a, b) { return a - b; }).forEach((number) => {
  console.log(number);
});
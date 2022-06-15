var character = "luigi";
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input.offsetLeft);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(20));

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
var names = ['luigi', 'mario', 3];
names.push(3);
var mixed = ['ken', 4, 'chun-li'];
var ninja = {
    name: 'Mario',
    age: 5
};
ninja.name = String(9);
console.log(typeof ninja.name, ninja.name);

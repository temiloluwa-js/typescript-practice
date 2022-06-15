const character = "luigi"
console.log(character)
const inputs = document.querySelectorAll('input')
console.log(inputs)

inputs.forEach(input => {
    console.log(input.offsetLeft)
})

const circ = (diameter: number) => {
    return diameter * Math.PI
}
console.log(circ(20))

const names = ['luigi', 'mario', 3]
names.push(3)

// let mixed = ['ken', 4, 'chun-li']
let mixedmixed: any[] = []
let ninjago: {name: any, age: any}

let ninja = {
    name: 'Mario',
    age: 5
}

ninja.name = String(9)
console.log(typeof ninja.name, ninja.name)

//explicit ttypes
let char: string;
let isLoggedIn: boolean
let nombas: number[] = []
char = "1"
nombas = [1, 2 ,3]
console.log(nombas)

let mixed: (string|number)[] = []
let ninjaOne: object

ninjaOne = {name: "yoshi", age: 30}
let ninjaTwo: {
    name: string,
    age: number,
    beltColor: string
}
// mixed.push(s)

let age: any = 25;

age = true
console.log(age)
age = {name: "luigi", age: 30}
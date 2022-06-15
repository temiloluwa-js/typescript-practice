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

let mixed = ['ken', 4, 'chun-li']

let ninja = {
    name: 'Mario',
    age: 5
}

ninja.name = String(9)
console.log(typeof ninja.name, ninja.name)
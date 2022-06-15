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
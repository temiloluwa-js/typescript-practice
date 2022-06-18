import { Invoice } from "./classes/invoice.js"
import { HasFomatter } from "./interfaces/HasFormatter.js"
import { Payment } from "./classes/payment.js"
import { listTemplate } from "./classes/listTemplate.js";
const form = document.querySelector('.new-item-form') as HTMLFormElement

// let docOne: HasFomatter;
// let docTwo: HasFomatter;

// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'ploughing work', 300)

// let docs: HasFomatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

const type = <HTMLSelectElement>document.querySelector('#type')
const tofrom = <HTMLInputElement>document.querySelector('#tofrom')
const details = <HTMLInputElement>document.querySelector('#details')
const amount = <HTMLInputElement>document.querySelector('#amount')

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    let doc: HasFomatter;
    if(type.value === "invoice"){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end')
})

const ul  = document.querySelector('ul')!
const list = new listTemplate(ul)


// const invOne = new Invoice('mario', 'works on mario website', 250)
// const invTwo = new Invoice('luigi', 'works on luigi website', 200)


// let invoices: Invoice[] = [];
// invoices.push(invOne, invTwo)

// invoices.forEach(inv => {
//     console.log(inv.client, inv.details, inv.amount, inv.format())
// })
// const list: string[] = []

// interface isPerson {
//     name: string,
//     age: number,
//     speak(a: string): void,
//     spend(a: number): number
// }

// const me: isPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void{
//         console.log(text)
//     },
//     spend(money: number): number{
//         console.log(`i spent ${money}`)
//         return money
//     }
// }

// console.log(me)
import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
const form = document.querySelector('.new-item-form');
let docOne;
let docTwo;
docOne = new Invoice('yoshi', 'web work', 250);
docTwo = new Payment('mario', 'ploughing work', 300);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
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

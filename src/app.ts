// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// const form = 

// const form = document.querySelector('form')!

const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

const type = <HTMLSelectElement>document.querySelector('#type')
const tofrom = <HTMLInputElement>document.querySelector('#tofrom')
const details = <HTMLInputElement>document.querySelector('#details')
const amount = <HTMLInputElement>document.querySelector('#amount')

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})

class Invoice {
    client: string;
    readonly details: string;
    public amount: number;

    constructor(c: string, d: string, a: number){
        this.client = c
        this.details = d
        this.amount =a
    }

    format(){
        return `${this.client} breh ${this.details} breh ${this.amount}`
    }
}

const invOne = new Invoice('mario', 'works on mario website', 250)
const invTwo = new Invoice('luigi', 'works on luigi website', 200)


let invoices: Invoice[] = [];
invoices.push(invOne, invTwo)

invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format())
})
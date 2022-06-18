import { Invoice } from "./classes/invoice.js";
import { Payment } from "./classes/payment.js";
import { listTemplate } from "./classes/listTemplate.js";
const form = document.querySelector('.new-item-form');
// let docOne: HasFomatter;
// let docTwo: HasFomatter;
// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'ploughing work', 300)
// let docs: HasFomatter[] = []
// docs.push(docOne)
// docs.push(docTwo)
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
    list.render(doc, type.value, 'end');
});
const ul = document.querySelector('ul');
const list = new listTemplate(ul);
//generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const obj = {
    uid: 1,
    resourceName: 'yoshi',
    resourceTYpe: ResourceType.BOOK,
    data: { name: 'hello' }
};
console.log(obj);

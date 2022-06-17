import { HasFomatter } from "../interfaces/HasFormatter.js";
export class Invoice implements HasFomatter{
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

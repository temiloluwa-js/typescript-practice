import { HasFomatter } from "../interfaces/HasFormatter";
export class Payment implements HasFomatter {
  constructor(
    public recipient: string,
    public details: string,
    readonly amount: number
  ) {}

  format(): string {
    return `${this.recipient} and ${this.details} and ${this.amount}`;
  }
}

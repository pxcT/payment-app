export class Payment {
    creditCardNumber: string; // required
    cardholder: string; // required;
    expirationDate: Date; // required - Date Cannot be in the past
    securityCode: string; // optional - 3 digits
    amount: number; // required - amount > 0

    constructor() { }
}

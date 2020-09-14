import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Models
import { Payment } from './models/payment.model';
import { ErrorValidator } from './../error-validator';

// Services
import { PaymentService } from '../payment.service';

@Component({
    selector: 'app-payment-form',
    templateUrl: './payment-form.component.html',
    styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent {
    public paymentForm = new FormGroup({
        creditCardNumber: new FormControl('', [Validators.required, ErrorValidator.onlyNumbers()]),
        cardholder: new FormControl('', [Validators.required]),
        expirationDate: new FormControl('', [Validators.required, ErrorValidator.minDateValidator(new Date())]),
        securityCode: new FormControl('', [Validators.maxLength(3), Validators.minLength(3), ErrorValidator.onlyNumbers()]),
        amount: new FormControl('', [Validators.required, ErrorValidator.minInputValue(1)])
    });

    public payment = new Payment();

    public minDatePickerValue = new Date();

    constructor(private paymentService: PaymentService) { }

    public onSubmit(): void {
        if (this.paymentForm.invalid) {
            this.paymentForm.markAllAsTouched();
            return;
        }

        Object.keys(this.paymentForm.controls).map((key) => {
            this.payment[key] = this.paymentForm.controls[key].value;
        });

        this.paymentService.submitPayment(this.payment).subscribe((message: string) => {
            console.log('got here', message)
        })
    }
}

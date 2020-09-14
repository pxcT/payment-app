import { Payment } from './payment-form/models/payment.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const baseUrl = 'localhost:3000';
@Injectable({ providedIn: 'root' })
export class PaymentService {
	constructor(private http: HttpClient) { }

	public submitPayment(payment: Payment) {
		return this.http.post(`http://localhost:3000/payment`, payment);
	}
}

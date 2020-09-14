import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { PaymentFormComponent } from './payment/payment-form/payment-form.component';


const routes: Routes = [{
    path: 'payment',
    component: PaymentFormComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

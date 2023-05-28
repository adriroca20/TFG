import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Payment } from '../../interfaces/Interfaces';
@Component({
  selector: 'ecom-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  @Input() setData!:Payment;
  @Output() getData =  new EventEmitter<any>();
}

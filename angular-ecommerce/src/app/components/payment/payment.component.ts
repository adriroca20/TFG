import { Component, Input, Output, EventEmitter } from '@angular/core';
import { payment } from 'src/app/interfaces/Interfaces';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  @Input() setData!:payment;
  @Output() getData =  new EventEmitter<any>();
}

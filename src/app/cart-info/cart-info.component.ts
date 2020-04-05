import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-info',
  templateUrl: './cart-info.component.html',
  styleUrls: ['./cart-info.component.css']
})
export class CartInfoComponent implements OnInit {

    @Input() message1: number;
    @Input() message2: number;
    @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  closeBtn(){
    this.close.emit(null);
  }

}

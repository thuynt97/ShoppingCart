import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

export class PriceClass {
  subtotal: number;
  tax: number;
}

@Component({
  selector: "app-product-price",
  templateUrl: "./product-price.component.html",
  styleUrls: ["./product-price.component.css"]
})
export class ProductPriceComponent implements OnInit {
  @Input() subTotal;
  @Input() discount;
  @Output() promoCode = new EventEmitter();
  promoValue: string;
  tax: number;
  total: number;

  constructor() {}

  ngOnInit() {
  }
  ngOnChange(){
    
  }

  handlePromo(promoValue) {
    this.promoCode.emit(promoValue);
  }
}

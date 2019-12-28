import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";

export class ProductClass {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  src: string;
}

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  @Input() products;
  @Output() removePr = new EventEmitter();
  @Output() updatePr = new EventEmitter();

  constructor() {}

  ngOnInit() {}
  removeProduct(id: number) {
    let confirmDelete = confirm("Delete?");
    if (confirmDelete) {
      this.removePr.emit(id);
    }
  }
  changeQuantity(id: number, quantity: string) {    
    this.updatePr.emit({id,quantity});
  }
}

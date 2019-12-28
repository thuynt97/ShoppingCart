import { Component, Input } from "@angular/core";
import { ProductClass } from "./common/model/Product";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "angular-shopping-cart";
  products: ProductClass[] = [
    {
      id: 1,
      name: "PRODUCT ITEM NUMBER 1",
      description: "Description for product item number 1",
      price: 2000,
      quantity: 5,
      src: "https://via.placeholder.com/200x150"
    },
    {
      id: 2,
      name: "PRODUCT ITEM NUMBER 2",
      description: "Description for product item number 2",
      price: 4000,
      quantity: 1,
      src: "https://via.placeholder.com/200x150"
    }
  ];

  itemNumber: number;
  subTotal: number;
  discount: number;
  promoInput: string;
  promoCodes = [
    {
      code: "LIXI",
      discount: 0.2
    },
    {
      code: "TET",
      discount: 0.3
    }
  ];

  constructor() {}

  ngOnInit() {
    this.calculatePrice();
  }

  removeProduct(id) {
    let index = this.products.findIndex(product => product.id === id);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
    this.calculatePrice();
  }

  updateQuantity(newProduct) {
    let index = this.products.findIndex(
      product => product.id === newProduct.id
    );
    if (index !== -1) {
      this.products[index].quantity = Number(newProduct.quantity);
    }
    this.calculatePrice();
  }

  handlePromoCode(promoValue) {
    let found = this.promoCodes.find(
      promoCode => promoCode.code === promoValue
    );
    if (found && found.code === promoValue) {
      this.discount = this.subTotal * found.discount;
      // this.total = this.subTotal - this.discount;
      alert("The promotional code was applied.");
    } else {
      this.calculatePrice();
      alert(
        'Sorry, the promotional code you entered is not valid! Try code "TET" (discount 30% to all cart items) or "LIXI" (discount 20% to all cart items).'
      );
    }

  }

  calculatePrice() {
    this.itemNumber = 0;
    this.subTotal = 0;
    this.discount = 0;

    for (let product of this.products) {
      this.itemNumber += product.quantity;
      this.subTotal += product.price * product.quantity;
    }
  }
}

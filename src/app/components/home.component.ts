import { Component } from "@angular/core";
import { IProduct } from "../models/product.interface";

@Component({
  selector: "app-home",
  template: `
    <h2 class="text-primary">Hello From Home</h2>
    <!-- <app-product></app-product> -->
    <!-- <app-product-list> </app-product-list> -->
    <button type="button" class="btn btn-primary mr-2" (click)="addProduct()">
      Adds A New Product
    </button>

    <div class="form-group">
      <input
        type="text"
        class="form-control mr-2"
        placeholder="Search"
        [(ngModel)]="searchText"
      />
    </div>
    <button
      type="button"
      class="btn btn-danger"
      (click)="isDestroy = !isDestroy"
    >
      Toggle Child
    </button>
    <app-child
      [products]="appProducts"
      [searchBy]="searchText"
      *ngIf="!isDestroy"
    >
    </app-child>
  `,
})
export class HomeComponent {
  constructor() {}
  searchText: string;
  appProducts: IProduct[] = [
    {
      productName: "Yamaha RX 100",
      description: "Nostalgic !",
      releaseDate: "10-08-1987",
      price: 122,
      isActive: false,
      imageUrl: "https://via.placeholder.com/150?text=RX100",
    },
    {
      productName: "Bajaj Pulsar",
      description: "",
      releaseDate: "10-08-1920",
      price: 9,
      isActive: false,
      imageUrl: "https://via.placeholder.com/150?text=Pulsar",
    },
  ];

  isDestroy: boolean = false;

  addProduct() {
    this.appProducts.push({
      productName: "New Prodcut",
      description: "Nostalgic !",
      releaseDate: "10-08-1987",
      price: 122,
      isActive: false,
      imageUrl: "https://via.placeholder.com/150?text=RX100",
    });
  }
}

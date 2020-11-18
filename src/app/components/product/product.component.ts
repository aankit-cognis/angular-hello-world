import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product",
  templateUrl: "product.component.html",
})
export class ProductComponent {
  constructor() {}
  products: any[] = [
    {
      productName: "Hero Honda CD 100",
      description: "Most popular Bike of India",
      releaseDate: "10-08-1990",
      price: 100,
      isActive: false,
    },
    {
      productName: "Honda Hornet",
      description: "A sports Bike",
      releaseDate: "10-08-2010",
      price: 200,
      isActive: true,
    },
    {
      productName: "Super splendor",
      description: "A Bike that the nation trusts",
      releaseDate: "10-08-1980",
      price: 75,
      isActive: true,
    },
    {
      productName: "Yamaha RX 100",
      description: "Nostalgic !",
      releaseDate: "10-08-1987",
      price: 122,
      isActive: false,
    },
  ];
}

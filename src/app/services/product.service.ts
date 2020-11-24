import { Injectable } from "@angular/core";
import { IProduct } from "../models/product.interface";
import { Notyf } from "notyf";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  lastDeletedProduct: string = "";
  notyf: Notyf;
  products: IProduct[] = [
    {
      productName: "Hero Honda CD 100",
      description: null,
      releaseDate: "10-08-1990",
      price: 100,
      isActive: false,
      imageUrl: "https://via.placeholder.com/250?text=CD100 SS",
    },
    {
      productName: "Honda Hornet",
      description: "A sports Bike",
      releaseDate: "10-08-2010",
      price: 200,
      isActive: true,
      imageUrl: "https://via.placeholder.com/250?text=Hornet",
    },
    {
      productName: "Super splendor",
      description: "A Bike that the nation trusts",
      releaseDate: "10-08-1980",
      price: 75,
      isActive: true,
      imageUrl: "https://via.placeholder.com/250?text=Splendor",
    },
    {
      productName: "Yamaha RX 100",
      description: "Nostalgic !",
      releaseDate: "10-08-1987",
      price: 122,
      isActive: false,
      imageUrl: "https://via.placeholder.com/250?text=Rx100",
    },
    {
      productName: "Bajab Pulsar 150",
      description: "New Bike !",
      releaseDate: "10-08-2000",
      price: 1220,
      isActive: true,
      imageUrl: "https://via.placeholder.com/250?text=Pulsar",
    },
  ];
  constructor() {
    this.notyf = new Notyf();
  }

  getProducts(): IProduct[] {
    console.log("Inside Product Service ! Get Products Method()");
    return this.products;
  }

  deleteProduct(productName: string): void {
    this.lastDeletedProduct = productName;
    this.products.splice(
      this.products.findIndex((item) => item.productName === productName),
      1
    );
    this.notyf.error(`${productName} deleted`);
  }
}

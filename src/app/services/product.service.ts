// import { Injectable } from "@angular/core";

import { IProduct } from "../models/product.interface";

// @Injectable({
//   providedIn: 'root'
// })
export class ProductService {
  private originalProducts: IProduct[] = [
    {
      productName: "Hero Honda CD 100",
      description: "Most popular Bike of India",
      releaseDate: "10-08-1990",
      price: 100,
      isActive: true,
      imageUrl: "https://via.placeholder.com/150?text=CD100SS",
    },
    {
      productName: "Honda Hornet",
      description: "A sports Bike",
      releaseDate: "10-08-2010",
      price: 200,
      isActive: true,
      imageUrl: "https://via.placeholder.com/150?text=Hornet",
    },
    {
      productName: "Super splendor",
      description: null,
      releaseDate: "10-08-1980",
      price: 75,
      isActive: true,

      imageUrl: "https://via.placeholder.com/150?text=Splendor",
    },
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

  constructor() {}

  getProducts(): IProduct[] {
    return this.originalProducts;
  }
}

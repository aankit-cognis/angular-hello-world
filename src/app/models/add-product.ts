import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class AddProduct {
  productName: string;
  description: string;
  releaseDate: string;
  price: number;
  rating: number;
  imageUrl: string;

  constructor(
    name: string,
    desc: string,
    releaseDate: string,
    price: number,
    rating: number,
    imageUrl: string
  ) {
    this.productName = name;
    this.description = desc;
    this.releaseDate = releaseDate;
    this.price = price;
    this.rating = rating;
    this.imageUrl = imageUrl;
  }
}

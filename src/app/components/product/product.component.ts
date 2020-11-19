import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product.interface";

@Component({
  selector: "app-product",
  templateUrl: "product.component.html",
})
export class ProductComponent {
  constructor() {}
  showImages: boolean = true;
  searchText: string = "";

  products: IProduct[] = [
    {
      productName: "Hero Honda CD 100",
      description: "Most popular Bike of India",
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
  ];
  actualProducts: any[] = [...this.products];

  toggleImage(): void {
    this.showImages = !this.showImages;
    console.log("Button Clicked !", this.showImages);
  }

  filterData() {
    console.log(this.searchText);
    this.products = this.actualProducts.filter((filter) =>
      filter.productName.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  getPriceClasses(product: IProduct) {
    const is200 = product.price === 200;
    return {
      green: is200,
      bold: is200,
    };
  }
  getPriceStyles(product: IProduct) {
    const is200 = product.price === 200;
    if (is200) {
      return {
        color: is200 ? "red" : "",
        fontWeight: is200 ? "bold" : "normal",
      };
    } else {
      return {};
    }
  }
}

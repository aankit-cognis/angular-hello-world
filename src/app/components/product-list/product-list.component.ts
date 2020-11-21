import { UpperCasePipe } from "@angular/common";
import { ElementSchemaRegistry } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product.interface";

@Component({
  selector: "app-product-list",
  templateUrl: "product-list.component.html",
})
export class ProductListComponent {
  constructor(private upperCase: UpperCasePipe) {}
  showImages: boolean = true;
  searchText: string = "";
  selectedSort: string = "";
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
  actualProducts: any[] = [...this.products];

  toggleImage(): void {
    this.showImages = !this.showImages;
  }

  filterData() {
    this.products = this.actualProducts.filter((filter) =>
      filter.productName.toLowerCase().includes(this.searchText.toLowerCase())
    );
    this.sortBikesByModel();
  }
  getPriceClasses(product: IProduct) {
    const is200 = product.price === 200;
    return {
      green: is200,
      bold: is200,
    };
  }

  sortBikes(event): void {
    let sortValue = event.target.value;
    if (sortValue === "name") {
      this.products = this.products.sort((a: IProduct, b: IProduct) => {
        if (a.productName > b.productName) return 1;
        else if (b.productName > a.productName) return -1;
        else return 0;
      });
    } else if (sortValue == "price") {
      this.products = this.products.sort((a: IProduct, b: IProduct) => {
        return a.price - b.price;
      });
    }
  }
  sortBikesByModel() {
    if (this.selectedSort === "name") {
      this.products = this.products.sort((a: IProduct, b: IProduct) => {
        if (a.productName > b.productName) return 1;
        else if (b.productName > a.productName) return -1;
        else return 0;
      });
    } else if (this.selectedSort == "price") {
      this.products = this.products.sort((a: IProduct, b: IProduct) => {
        return a.price - b.price;
      });
    }
  }

  changeName(): void {
    // (this.products[0] as any).bar = "Honda Civic";
    this.products[0].productName = "Nexon";
  }
  onProductDeleted(productName: string) {
    this.products.splice(
      this.products.findIndex((item) => item.productName === productName),
      1
    );
    this.actualProducts.splice(
      this.actualProducts.findIndex((item) => item.productName === productName),
      1
    );
  }

  newCustomProducts: IProduct[] = [
    {
      productName: "A New Bike 1",
      description: "Desc of a new bike",
      releaseDate: "10-08-2010",
      price: 200,
      isActive: true,
      imageUrl: "https://via.placeholder.com/250?text=Hornet",
    },
    {
      productName: "A New Bike 1",
      description: "Desc of a new bike",
      releaseDate: "10-08-2010",
      price: 200,
      isActive: true,
      imageUrl: "https://via.placeholder.com/250?text=Hornet",
    },
  ];

  isDestroy: boolean = false;
  addANewBile() {
    this.newCustomProducts.push({
      productName: "A New Bike3",
      description: "Desc of a new bike",
      releaseDate: "10-08-2010",
      price: 200,
      isActive: true,
      imageUrl: "https://via.placeholder.com/250?text=Hornet",
    });
    // this.actualProducts[0].productName = "name";
  }
}
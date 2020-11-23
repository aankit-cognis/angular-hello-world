import { UpperCasePipe } from "@angular/common";
import { ElementSchemaRegistry } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product.interface";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "product-list.component.html",
  providers: [ProductService],
})
export class ProductListComponent {
  constructor(
    private upperCase: UpperCasePipe,
    private productService: ProductService
  ) {}
  showImages: boolean = true;
  searchText: string = "";
  selectedSort: string = "";
  products: IProduct[];
  actualProducts: any[];

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.actualProducts = [...this.products];
  }

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

import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product.interface";
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "product-list.component.html",
})
export class ProductListComponent implements OnInit {
  constructor(
    private upperCasePipe: UpperCasePipe,
    private lowerCasePipe: LowerCasePipe,
    private isNullOrEmpty: IfNullOrEmpty,
    private productService: ProductService
  ) {}

  ngOnInit() {
    console.log("Inside On ngOnInit of ProductListComponent");
    this.loadData();
  }

  showImages: boolean = false;
  pageTitle: string = "Hello World";
  searchText: string = "";
  products: IProduct[];
  actualBikes: IProduct[];

  getTitle(): string {
    return "Hello from Method";
  }

  // showImage(getImage('path', 'format), 'thumbnail');

  toggleImages(): void {
    this.showImages = !this.showImages;
    if (this.showImages) {
      this.pageTitle = this.isNullOrEmpty.transform(
        this.upperCasePipe.transform(this.pageTitle),
        "N/A"
      );
    } else {
      this.pageTitle = this.isNullOrEmpty.transform(
        this.lowerCasePipe.transform(this.pageTitle),
        "N/A"
      );
    }
  }

  changeName() {
    this.products[0].productName = "Nexon";
  }
  mouseEnterEvent() {}

  filterBikes() {
    console.log("Event Triggered !");

    if (this.searchText) {
      this.products = this.actualBikes.filter((x) =>
        x.productName.toLowerCase().includes(this.searchText.toLowerCase())
      );
    } else {
      this.products = this.actualBikes;
    }
  }

  onSuccessfullyDeleted(productName: string) {
    console.log("Inside Product List Componnet ", productName);
    this.productService.removeBike(productName);
    this.loadData();
  }

  private loadData() {
    this.products = this.productService.getProducts();
    this.actualBikes = [...this.products];
  }
}

import { UpperCasePipe } from "@angular/common";
import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { IProduct } from "src/app/models/product.interface";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-list",
  templateUrl: "product-list.component.html",
})
export class ProductListComponent implements OnInit, OnDestroy {
  private ngUnsubscribe: Subject<any> = new Subject();

  constructor(
    private upperCase: UpperCasePipe,
    private productService: ProductService
  ) {}
  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
  showImages: boolean = true;
  searchText: string = "";
  selectedSort: string = "";
  products: IProduct[];
  actualProducts: any[];

  ngOnInit() {
    this.loadInitialData();
  }
  private loadInitialData() {
    this.productService
      .getProducts()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(
        (data: IProduct[]) => {
          console.log(data);
          this.products = data;
          this.actualProducts = [...this.products];
        },
        (error) => {
          console.log("ERROR -", error);
        }
      );
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
    console.log("Product Deleted !", event);
    this.loadInitialData();
  }

  onStatusChanged(event) {
    console.log("Status Of Product Changed !", event);
    this.loadInitialData();
  }
}

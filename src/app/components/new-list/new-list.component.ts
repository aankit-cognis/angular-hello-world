import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product.interface";
import { ProductService } from "src/app/services/product.service";
import { ProductListComponent } from "../product-list/product-list.component";

@Component({
  selector: "app-new-list",
  templateUrl: "./new-list.component.html",
  styleUrls: ["./new-list.component.scss"],
})
export class NewListComponent implements OnInit {
  productlist: IProduct[];
  lastProduct: string;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productlist = this.productService.getProducts();
    this.lastProduct = this.productService.lastDeletedProduct;
  }
  reloadData() {
    this.productlist = this.productService.getProducts();
    this.lastProduct = this.productService.lastDeletedProduct;
  }
}

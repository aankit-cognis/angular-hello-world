import { Component, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product.interface";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-new-list-component",
  templateUrl: "./new-list-component.component.html",
  styleUrls: ["./new-list-component.component.scss"],
})
export class NewListComponentComponent implements OnInit {
  newProducts: IProduct[];
  recentlyDeleted: string;
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    //this.newProducts = this.productService.getProducts();
    this.recentlyDeleted = this.productService.lastDeletedProduct;
  }
}

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { IProduct } from "src/app/models/product.interface";
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.scss"],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private productService: ProductService
  ) {}
  productId: number;
  currentProduct: IProduct;
  ngOnInit() {
    console.log("Inside COmponent", this.activateRoute);
    this.currentProduct = this.activateRoute.snapshot.data["product"];
  }
}

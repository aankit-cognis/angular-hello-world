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
    console.log(this.activateRoute.snapshot);
    console.log(this.activateRoute.snapshot.params["id"]);
    this.productId = this.activateRoute.snapshot.params["id"];

    this.productService.getProduct(this.productId).subscribe(
      (data: IProduct) => {
        this.currentProduct = data;
      },
      (error) => {}
    );
  }
}

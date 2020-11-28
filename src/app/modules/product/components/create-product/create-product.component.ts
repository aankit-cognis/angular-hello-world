import { I18nPluralPipe } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AddProduct } from "src/app/models/add-product";
import { IProduct } from "src/app/models/product.interface";
import { ProductService } from "src/app/services/product.service";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-create-product",
  templateUrl: "./create-product.component.html",
  styleUrls: ["./create-product.component.scss"],
})
export class CreateProductComponent implements OnInit {
  createProduct: FormGroup;
  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private utilityService: UtilityService,
    private router: Router
  ) {}

  ngOnInit() {
    this.createProduct = this.fb.group({
      productName: [
        "",
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(128),
        ],
      ],
      description: [
        "",
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(128),
        ],
      ],
      price: [0.0, [Validators.required, Validators.min(0)]],
      releaseDate: ["", Validators.required],
      rating: [
        0.0,
        [Validators.required, Validators.min(0), Validators.max(5)],
      ],
      imageUrl: ["", [Validators.required]],
    });
  }

  submitForm() {
    console.log("Submitting the form ", this.createProduct.value);
    let data = this.createProduct.value;
    let product = new AddProduct(
      data.productName,
      data.description,
      data.releaseDate,
      data.price,
      data.rating,
      data.imageUrl
    );
    this.productService
      .createNewProduct(product)
      .subscribe((data: IProduct) => {
        this.utilityService.showSuccess("Product added successfully.");
        this.router.navigate(["/products"]);
      });
  }
}

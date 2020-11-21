import { Component, Input, OnChanges, OnInit } from "@angular/core";
import { IProduct } from "src/app/models/product.interface";

@Component({
  selector: "app-procuct",
  templateUrl: "./procuct.component.html",
  styleUrls: ["./procuct.component.css"],
})
export class ProcuctComponent implements OnInit {
  @Input() product: IProduct;
  @Input() showImages: boolean;
  constructor() {}

  ngOnInit() {}

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

import { EventEmitter } from "@angular/core";
import { Component, Input, OnChanges, OnInit, Output } from "@angular/core";
import { IProduct } from "src/app/models/product.interface";

@Component({
  selector: "app-procuct",
  templateUrl: "./procuct.component.html",
  styleUrls: ["./procuct.component.css"],
})
export class ProcuctComponent implements OnInit {
  @Input() product: IProduct;
  @Input() showImages: boolean;

  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
    console.log("From ngOnInit() ProcuctComponent");
  }

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

  deleteBike() {
    console.log("Deleting Bike ", this.product.productName);
    //Make your http call to delete the bike.
    this.onDelete.emit(this.product.productName);
  }
}

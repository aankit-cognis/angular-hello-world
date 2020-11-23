import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { IProduct } from "src/app/models/product.interface";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
})
export class ProductComponent implements OnInit, OnChanges {
  constructor() {}

  @Input() productToBeRendered: IProduct;
  @Input() canShowImage: boolean;
  @Output() onProductDeleted: EventEmitter<string> = new EventEmitter<string>();

  private counter: number = 0;

  ngOnInit(): void {
    // console.log("Inside ProductComponent - ngOnInit()");
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log("Inside ngOnChanges of Product Component", changes);
  }

  getStyles(product: IProduct) {
    if (product.price == 200) {
      return {
        color: "red",
        "font-weight": "bold",
      };
    } else {
      return {};
    }
  }

  deleteProduct() {
    // console.log("Deleting product ", this.productToBeRendered.productName);

    //HTTP call to the server. Or your complex logic.
    this.onProductDeleted.emit(this.productToBeRendered.productName);
  }
}

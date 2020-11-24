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
import { ProductService } from "src/app/services/product.service";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
})
export class ProductComponent implements OnInit, OnChanges {
  constructor(private productService: ProductService) {}

  @Input() productToBeRendered: IProduct;
  @Input() canShowImage: boolean;
  @Output() onProductDeleted: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  onProductStatusChanged: EventEmitter<IProduct> = new EventEmitter<IProduct>();

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
    this.onProductDeleted.emit(this.productToBeRendered.productName);
  }

  changeStatus(id: number, status: string) {
    this.productService.changeStatus(id, status).subscribe(
      (data: IProduct) => {
        console.log("Status Changed ", data);
        this.onProductStatusChanged.emit(data);
      },
      (error) => {}
    );
  }
}

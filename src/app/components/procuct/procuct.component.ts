import { EventEmitter } from "@angular/core";
import { Component, Input, OnInit, Output } from "@angular/core";
import { IProduct } from "src/app/models/product.interface";
import { ProductService } from "src/app/services/product.service";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-procuct",
  templateUrl: "./procuct.component.html",
  styleUrls: ["./procuct.component.css"],
})
export class ProcuctComponent implements OnInit {
  @Input() product: IProduct;
  @Input() showImages: boolean;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  onStatusChanged: EventEmitter<IProduct> = new EventEmitter<IProduct>();

  constructor(
    private productService: ProductService,
    private utilityService: UtilityService
  ) {}

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
  changeStatus(id: number, status: string) {
    console.log("Inside Change Status", status);
    this.productService.changeStatus(id, status).subscribe(
      (data: IProduct) => {
        console.log("Status Changed", data);
        this.utilityService.showError(
          `${data.productName} is ${
            status == "deactivate" ? "de activated" : "re activated"
          }`
        );
        this.onStatusChanged.emit(data);
      },
      (error) => {
        console.log("ERROR -", error);
      }
    );
  }
  deleteBike(id: number) {
    this.productService.deleteProduct(id).subscribe(
      (data: IProduct) => {
        console.log("Deleted", data);
        this.utilityService.showError(
          `${data.productName} is deleted successfully`
        );
        this.onDelete.emit(data.productName);
      },
      (error) => {
        console.log("ERROR -", error);
      }
    );
  }
}

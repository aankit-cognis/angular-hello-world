import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from "@angular/core";
import { IProduct } from "src/app/models/product.interface";

@Component({
  selector: "app-custom",
  templateUrl: "./custom.component.html",
  styleUrls: ["./custom.component.css"],
})
export class CustomComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  constructor() {}

  counter: number = 0;
  @Input() products: IProduct[];
  @Input() searchTerm: string;
  ngOnInit() {
    this.counter++;
    console.log("Custom Componnet ngOnInit()", {
      products: this.products,
      counter: this.counter,
    });
    console.log("Custom Componnet ngOnInit()", {
      products: this.products,
      counter: this.counter,
    });
  }
  ngOnChanges() {
    this.counter++;
    console.log("Custom Componnet ngOnChanges()", {
      products: this.products,
      counter: this.counter,
    });
  }
  ngDoCheck(): void {
    this.counter++;
    console.log("Custom Componnet ngDoCheck()", {
      products: this.products,
      counter: this.counter,
    });
  }
  ngOnDestroy() {
    console.log("Inside on Destroy");
  }
}

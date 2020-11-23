import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from "@angular/core";
import { IProduct } from "src/app/models/product.interface";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
})
export class ChildComponent implements OnInit, OnChanges, DoCheck, OnDestroy {
  @Input() products: IProduct[];
  @Input() searchBy: string;
  counter: number = 0;

  constructor() {}

  ngDoCheck(): void {
    this.counter++;
    console.log("Inside ngDoCheck ChildComponent ", {
      products: this.products,
      search: this.searchBy,
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Inside ngOnChanges ChildComponent ", {
      products: this.products,
      search: this.searchBy,
    });
  }
  ngOnInit() {
    console.log("Inside OnInit ChildComponent ", {
      products: this.products,
      search: this.searchBy,
    });
  }

  ngOnDestroy(): void {
    console.log("Inside ngOnDestroy ChildComponent ", {
      products: this.products,
      search: this.searchBy,
    });
  }
}

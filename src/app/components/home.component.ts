import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { IProduct } from "../models/product.interface";
import { ChildComponent } from "./child/child.component";

@Component({
  selector: "app-home",
  template: ` <h2 class="text-primary" >Hello From Home</h2>
    <app-product-list></app-product-list>`,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

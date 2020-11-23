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
  template: ` <h2 class="text-primary" #header>Hello From Home</h2>
    <app-child></app-child>
    <app-child></app-child>
    <app-child></app-child>`,
})
export class HomeComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild("header") headrElement: ElementRef;
  @ViewChildren(ChildComponent) childComp: QueryList<ChildComponent>;

  constructor() {
    console.log("ChildComponent ", this.childComp);
  }

  ngOnInit() {
    console.log("ChildComponent ngOnInit", this.childComp);
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit", this.childComp.toArray());
    window.setInterval(() => {
      this.childComp.toArray().forEach((el) => (el.dateTime = new Date()));
    }, 1000);
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked", this.childComp.toArray());
  }
}

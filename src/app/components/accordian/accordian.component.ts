import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChild,
} from "@angular/core";
import { ChildComponent } from "../child/child.component";

@Component({
  selector: "app-accordian",
  templateUrl: "./accordian.component.html",
  styleUrls: ["./accordian.component.scss"],
})
export class AccordianComponent
  implements OnInit, AfterViewInit, AfterViewChecked {
  @Input() header: string;
  isExpand: boolean = true;

  @ContentChild("detailsButton") detailsB: ElementRef;
  @ContentChildren(ChildComponent) childComp: QueryList<ChildComponent>;

  constructor() {}
  ngAfterViewChecked(): void {
    console.log("Inside ngAfterViewInit of Acc Componnet ", this.childComp);
  }
  ngAfterViewInit(): void {
    console.log(
      "Inside ngAfterViewInit of Acc Componnet ",
      this.childComp.toArray()
    );
  }

  ngOnInit() {
    console.log("Inside Oninit of Acc Componnet ", this.detailsB);
  }

  n;
}

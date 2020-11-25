import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-accordian",
  templateUrl: "./accordian.component.html",
  styleUrls: ["./accordian.component.scss"],
})
export class AccordianComponent implements OnInit, AfterViewInit {
  isExpand: boolean = true;
  @ContentChild("detailsButton") detailsButton: ElementRef;

  @Input() title: string;
  constructor() {}
  ngAfterViewInit(): void {
    // console.log("Inside afterViewInit AccordianComponent", this.detailsButton);
  }

  ngOnInit() {}
}

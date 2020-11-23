import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-accordian",
  templateUrl: "./accordian.component.html",
  styleUrls: ["./accordian.component.scss"],
})
export class AccordianComponent implements OnInit {
  isExpand: boolean = true;

  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}

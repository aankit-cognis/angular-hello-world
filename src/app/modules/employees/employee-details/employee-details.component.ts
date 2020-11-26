import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.scss"],
})
export class EmployeeDetailsComponent implements OnInit {
  constructor(private activeRoute: ActivatedRoute) {}

  empName: string;
  ngOnInit() {
    this.empName = this.activeRoute.snapshot.paramMap.get("name");
  }
}

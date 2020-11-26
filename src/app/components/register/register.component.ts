import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  originalData: any = {
    fullName: "sasas",
    email: "sas",
    country: "india",
    notes: "sasa",
    isSubscribe: true,
    gender: "male",
  };

  data = { ...this.originalData };

  constructor() {}
  ngOnInit() {}
  onSubmit(form) {
    console.log("Inside Form", form.value);
  }
}

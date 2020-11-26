import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  originalData: any = {
    fullName: null,
    email: null,
    country: null,
    notes: null,
    isSubscribe: null,
    gender: null,
  };

  data = { ...this.originalData };

  constructor() {}
  ngOnInit() {}
  onSubmit(form: NgForm) {
    console.log("Inside Form", form.submitted);
  }
}

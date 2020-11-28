import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, NgForm } from "@angular/forms";
import { IRegister } from "src/app/models/register.interface";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  data: IRegister = {
    country: "",
    emailAddress: "",
    fullName: "",
    gender: "",
    isSubscribe: false,
    password: "",
  };
  registerForm: FormGroup;

  constructor() {}

  ngOnInit() {
    this.registerForm = new FormGroup({
      fullName: new FormControl(),
      emailAddress: new FormControl(),
      isSubscribe: new FormControl(true),
    });
  }

  populateTestData() {
    // this.registerForm.setValue({
    //   fullName: "John Smith",
    //   emailAddress: "john@gmail.com",
    //   isSubscribe: false,
    // });

    this.registerForm.patchValue({
      fullName: "John Smith",
      emailAddress: "john@gmail.com",
    });
  }
  submitForm() {
    console.log("Form SUbmitted ", this.registerForm);
  }
}

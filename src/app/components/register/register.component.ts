import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { IRegister } from "src/app/models/register.interface";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  data: IRegister;
  originalData: IRegister;

  constructor() {}

  ngOnInit() {
    //I am making an http call.
    this.data = {
      fullName: "",
      emailAddress: "john@gmail.com",
      country: "srilanka",
      gender: "female",
      isSubscribe: false,
      password: "pssword@123",
    };
    this.originalData = { ...this.data };
  }
  submitForm(form: NgForm) {
    console.log("Form SUbmitted ", form);
  }
}

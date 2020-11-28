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
    fullName: "John Smith",
    emailAddress: "",
    country: "",
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
      isSubscribe: new FormControl(false),
    });
  }
  submitForm() {
    console.log("Form SUbmitted ", this.registerForm);
  }

  fillWithDummyData() {
    //API Call
    let datafromservice = {
      fullName: "Swagat",
      emailAddress: "swagat@gmail.com",
      is_Subscribed: true,
    };
    console.log("Fetching Data");
    this.registerForm.patchValue({
      fullName: datafromservice.fullName,
      emailAddress: datafromservice.emailAddress,
    });
  }
}

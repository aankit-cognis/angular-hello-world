import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
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

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: [
        this.data.fullName,
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(10),
        ],
      ],
      emailAddress: ["", [Validators.required, Validators.email]],
      isSubscribe: this.data.isSubscribe,
      phoneNumber: "",
      notification: "email",
    });

    // this.registerForm = new FormGroup({
    //   fullName: new FormControl(),
    //   emailAddress: new FormControl(),
    //   isSubscribe: new FormControl(true),
    // });
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

  updateNotification(notifyVia: string) {}
}

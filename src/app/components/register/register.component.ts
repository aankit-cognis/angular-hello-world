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
    fullName: "John Smith",
    emailAddress: "",
    country: "",
    gender: "",
    isSubscribe: false,
    password: "",
  };

  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      fullName: [
        "",
        [Validators.required, Validators.minLength(4), Validators.maxLength(8)],
      ],
      emailAddress: ["", [Validators.required, Validators.email]],
      isSubscribe: false,
      phoneNumber: "",
      notificationMedium: "email",
    });

    // this.registerForm = new FormGroup({
    //   fullName: new FormControl(),
    //   emailAddress: new FormControl(),
    //   isSubscribe: new FormControl(false),
    // });
  }
  submitForm() {
    console.log("Form SUbmitted ", this.registerForm);
  }

  fillWithDummyData() {
    //API Call
    let datafromservice = {
      fullName: "Swagat",
      emailAddress: "swaga32t@gmail.com",
      is_Subscribed: true,
    };
    console.log("Fetching Data");
    this.registerForm.patchValue({
      fullName: datafromservice.fullName,
      emailAddress: datafromservice.emailAddress,
    });
  }

  notifyUser(notifyBy: string) {
    console.log("I want to opt in via " + notifyBy);
    let phoneControl = this.registerForm.get("phoneNumber");
    console.log("phoneControl", phoneControl);

    if (notifyBy === "phone") {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }

    phoneControl.updateValueAndValidity();
  }
}

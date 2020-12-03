import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ValidatorFn,
  Validators,
  FormArray,
} from "@angular/forms";
import { IRegister } from "src/app/models/register.interface";

function rangeValidator(min: number, max: number): ValidatorFn {
  return function (
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    console.log("Control", control);

    if (
      (control !== null && isNaN(control.value)) ||
      control.value < 1 ||
      control.value > 5
    ) {
      return { range: true };
    }
    return null;
  };
}

function match(control: AbstractControl): { [key: string]: boolean } | null {
  let email = control.get("emailAddress");
  let confirmEmail = control.get("confirmEmailAddress");
  console.log("Control inside Mathc", email, confirmEmail);

  if (email.value !== confirmEmail.value) {
    return { match: true };
  }
  return null;
}
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
    isSubscribe: true,
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
      emailGroup: this.fb.group(
        {
          emailAddress: ["", [Validators.required, Validators.email]],
          confirmEmailAddress: ["", [Validators.required]],
        },
        { validators: match }
      ),
      isSubscribe: this.data.isSubscribe,
      phoneNumber: "",
      notification: "email",
      rating: [null, [rangeValidator(1, 5)]],
      addressArray: this.fb.array([this.buildAddressGroup()]),
    });

    let notifyControl = this.registerForm.get("notification");
    notifyControl.valueChanges.subscribe((data) => {
      console.log("valueChanges", data);
      this.updateNotification(data);
    });

    // this.registerForm = new FormGroup({
    //   fullName: new FormControl(),
    //   emailAddress: new FormControl(),
    //   isSubscribe: new FormControl(true),
    // });
  }
  addAddress() {
    this.registerForm
      .get("addressArray")
      ["controls"].push(this.buildAddressGroup());
  }
  buildAddressGroup(): FormGroup {
    return this.fb.group({
      addressType: "home",
      address1: ["", [Validators.required]],
      address2: "",
      state: "",
      city: "",
      zip: "",
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

  updateNotification(notifyBy: string) {
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

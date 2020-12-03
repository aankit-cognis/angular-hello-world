import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  ValidatorFn,
  Validators,
} from "@angular/forms";
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";
import { IRegister } from "src/app/models/register.interface";

function rangeValidator(min: number, max: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    console.log("Control - ", control);
    if (
      control !== null &&
      (isNaN(control.value) || control.value < min || control.value > max)
    ) {
      return { range: true };
    }
    //If validation rule passes, we return null
    return null;
  };
}

function matchEmail(c: AbstractControl): { [key: string]: boolean } | null {
  console.log("Inside Match EMail", c);
  let email = c.get("emailAddress");
  let cemail = c.get("confirmEmail");

  if (email.value == cemail.value) {
    return null;
  }

  return { matchEmail: true };
}

// function rangeValidator(
//   control: AbstractControl
// ): { [key: string]: boolean } | null {
//   console.log("Control - ", control);
//   if (
//     control !== null &&
//     (isNaN(control.value) || control.value < 1 || control.value > m5ax)
//   ) {
//     return { range: true };
//   }
//   //If validation rule passes, we return null
//   return null;
// };

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
      emailGroup: this.fb.group(
        {
          emailAddress: ["", [Validators.required, Validators.email]],
          confirmEmail: ["", [Validators.required]],
        },
        { validators: matchEmail }
      ),
      isSubscribe: true,
      phoneNumber: "",
      notificationMedium: "email",
      rating: [null, [rangeValidator(1, 5)]],
      addressArray: this.fb.array([this.createAddressGroup()]),
    });

    let notifyControl = this.registerForm.get("notificationMedium");
    notifyControl.valueChanges.subscribe((data) => {
      console.log(data);
      this.notifyUser(data);
    });
  }
  addAddrsss() {
    this.registerForm
      .get("addressArray")
      ["controls"].push(this.createAddressGroup());
  }
  createAddressGroup(): FormGroup {
    return this.fb.group({
      addressType: "home",
      address1: ["", [Validators.required]],
      address2: "",
      city: "",
      state: "",
      zip: "",
    });
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

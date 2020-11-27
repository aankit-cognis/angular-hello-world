import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor() {}
  data: {
    emailAddress: string;
    password: string;
  } = {
    emailAddress: "",
    password: "",
  };

  ngOnInit() {}
  submitForm(form: NgForm) {
    console.log("Login form submitted", form);
  }
}

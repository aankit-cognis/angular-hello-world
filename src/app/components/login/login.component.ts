import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { IUserToken } from "src/app/models/user-toke.interface";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  data: {
    emailAddress: string;
    password: string;
  } = {
    emailAddress: "swagat@gmail.com",
    password: "Password@123",
  };

  ngOnInit() {}
  submitForm(form: NgForm) {
    console.log("Login form submitted", form);
    this.authService
      .getUserToken(this.data.emailAddress, this.data.password)
      .subscribe((response: IUserToken) => {
        this.authService.doLogin(response);
        this.router.navigate(["/products"]);
      });
  }
}

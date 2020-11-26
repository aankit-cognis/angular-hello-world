import { ChangeDetectorRef, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IUserToken } from "src/app/models/user-token.interface";
import { AuthService } from "src/app/services/auth.service";
import { UserService } from "src/app/services/user.service";
import { UtilityService } from "src/app/services/utility.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(
    private userService: UserService,
    private utilityService: UtilityService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}
  doLogin(emailAddress: string, password: string) {
    console.log("Logging In ", { email: emailAddress, Pass: password });
    this.userService.getUserToken(emailAddress, password).subscribe(
      (data: IUserToken) => {
        console.log("Inside Login", data);
        this.authService.loginUser(data);
        this.utilityService.showSuccess(`Login successful`);
        this.router.navigate(["/products"]);
      },
      (error) => {
        console.log("ERROR -", error);
      }
    );
  }
}

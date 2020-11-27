import { AfterViewChecked, Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { IUserToken } from "src/app/models/user-toke.interface";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit, AfterViewChecked {
  loggedInUser: IUserToken;
  constructor(private authServicec: AuthService, private router: Router) {}
  ngAfterViewChecked(): void {
    this.loggedInUser = this.authServicec.getLoggedInUserData();
  }

  ngOnInit() {
    this.loggedInUser = this.authServicec.getLoggedInUserData();
  }

  logout() {
    this.authServicec.doLogout();
    this.router.navigate(["/navigate"]);
  }
}

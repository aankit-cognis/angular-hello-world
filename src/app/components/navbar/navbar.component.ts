import { AfterContentChecked, Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { IUserToken } from "src/app/models/user-token.interface";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit, AfterContentChecked {
  constructor(private authService: AuthService) {}
  ngAfterContentChecked(): void {
    this.authService
      .isUserLoggedIn()
      .subscribe((data) => (this.loggedInUser = data));
  }

  loggedInUser: IUserToken;
  ngOnInit() {
    this.authService
      .isUserLoggedIn()
      .subscribe((data) => (this.loggedInUser = data));
  }
  logOut() {
    this.authService.logOut();
  }
}

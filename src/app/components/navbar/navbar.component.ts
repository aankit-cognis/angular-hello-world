import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/auth.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  isLoggedInUser: boolean;
  constructor(private authServicec: AuthService) {}

  ngOnInit() {
    this.isLoggedInUser = this.authServicec.isUserLoggedIn();
  }
}

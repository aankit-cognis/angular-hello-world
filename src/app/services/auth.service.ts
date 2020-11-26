import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { IUserToken } from "../models/user-token.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  getUserData(): IUserToken {
    if (window.localStorage.getItem("userToken")) {
      return JSON.parse(window.localStorage.getItem("userToken")) as IUserToken;
    } else {
      return null;
    }
  }
  isUserLoggedIn(): Observable<IUserToken> {
    if (window.localStorage.getItem("userToken")) {
      return of(this.getUserData());
    } else {
      return of(null);
    }
  }
  loginUser(userData: IUserToken) {
    window.localStorage.setItem("userToken", JSON.stringify(userData));
  }

  logOut() {
    window.localStorage.clear();
  }
}

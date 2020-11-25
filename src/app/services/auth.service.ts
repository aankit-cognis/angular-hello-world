import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor() {}

  isUserLoggedIn(): boolean {
    //Get it from the local storage.
    return true;
  }
}

import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IUserToken } from "../models/user-toke.interface";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private http: HttpClient) {}
  private readonly _token: string = "userData";

  getLoggedInUserData(): IUserToken {
    //Get it from the local storage.
    if (window.localStorage.getItem(this._token)) {
      return JSON.parse(window.localStorage.getItem(this._token)) as IUserToken;
    }
    return null;
  }

  getUserToken(email: string, password: string): Observable<IUserToken> {
    let body = `userName=${email}&password=${password}&grant_type=password`;
    return this.http
      .post<IUserToken>(`http://testapi.techriff.in/Token`, body)
      .pipe(
        map(
          (data: any) =>
            ({
              userName: data.userName,
              accessToken: data.access_token,
            } as IUserToken)
        )
      );
  }

  doLogin(userData: IUserToken) {
    window.localStorage.setItem(this._token, JSON.stringify(userData));
  }
  doLogout() {
    window.localStorage.clear();
  }
}

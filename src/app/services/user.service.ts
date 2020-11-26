import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUserToken } from "../models/user-token.interface";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class UserService {
  // private _baseUrl: string = "https://localhost:44316";
  private _baseUrl: string = "http://testapi.techriff.in";

  constructor(private http: HttpClient) {}

  getUserToken(username: string, password: string): Observable<IUserToken> {
    let body = `username=${username}&password=${password}&grant_type=password`;
    return this.http.post<any>(`${this._baseUrl}/Token`, body).pipe(
      map(
        (data) =>
          ({
            userName: data.userName,
            userToken: data.access_token,
          } as IUserToken)
      )
    );
  }
}

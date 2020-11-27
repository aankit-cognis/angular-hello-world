import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, finalize, retry } from "rxjs/operators";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root",
})
export class WiproHttpInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = this.authService.getLoggedInUserData();
    req = req.clone({
      setHeaders: {
        Authorization: `bearer ${token?.accessToken}`,
      },
    });
    return next.handle(req).pipe(
      retry(2),
      catchError(this.handleError),
      finalize(() => {
        console.log(
          `Inside FInalize, METHOD = ${req.method}, URL=${req.urlWithParams}`
        );
      })
    );
  }

  private handleError(errorResponse: HttpErrorResponse) {
    //This can be a client side error.

    if (errorResponse.error instanceof ErrorEvent) {
      console.error("Client Side error !", errorResponse.error);
    } else {
      console.error("Server Side error !", errorResponse.error);
    }

    //Server side error.
    //400
    //500

    return throwError("Sorry An error occured!");
  }
}

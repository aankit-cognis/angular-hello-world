// import { Injectable } from "@angular/core";

import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IProduct } from "../models/product.interface";
import { UtilityService } from "./utility.service";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable()
export class ProductService {
  // private static _instance: ProductService;
  lastDeletedProduct: string;
  private readonly _baseUrl: string = "http://testapi.techriff.in/api";
  constructor(
    private utilityService: UtilityService,
    private http: HttpClient
  ) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(`${this._baseUrl}/open/products`)
      .pipe(catchError(this.handleError));
  }

  changeStatus(id: number, status: string): Observable<IProduct> {
    if (status === "activate") {
      return this.http
        .post<IProduct>(`${this._baseUrl}/open/products/${id}/reactivate`, null)
        .pipe(catchError(this.handleError));
    } else {
      return this.http
        .post<IProduct>(`${this._baseUrl}/open/products/${id}/deactivate`, null)
        .pipe(catchError(this.handleError));
    }
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.http
      .delete<IProduct>(`${this._baseUrl}/open/products/${id}`)
      .pipe(catchError(this.handleError));
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

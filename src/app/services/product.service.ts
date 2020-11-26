import { Injectable } from "@angular/core";
import { IProduct } from "../models/product.interface";
import { Notyf } from "notyf";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { UtilityService } from "./utility.service";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  lastDeletedProduct: string = "";

  // private _baseUrl: string = "https://localhost:44316/api";
  private _baseUrl: string = "http://testapi.techriff.in/api";
  constructor(
    private http: HttpClient,
    private utilityService: UtilityService
  ) {}

  getProducts(): Observable<IProduct[]> {
    console.log("Inside Product Service ! Get Products Method()");
    return this.http.get<IProduct[]>(`${this._baseUrl}/open/products`);
  }

  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this._baseUrl}/open/products/${id}`);
  }
  changeStatus(id: number, status: string): Observable<IProduct> {
    if (status == "reactivate") {
      return this.http.post<IProduct>(
        `${this._baseUrl}/open/products/${id}/reactivate`,
        null
      );
    } else {
      return this.http.post<IProduct>(
        `${this._baseUrl}/open/products/${id}/deactivate`,
        null
      );
    }
  }
  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this._baseUrl}/open/products/${id}`);
  }
}

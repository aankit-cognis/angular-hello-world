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
    return this.http.get<IProduct[]>(`${this._baseUrl}/products`);
  }
  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this._baseUrl}/products/${id}`);
  }
  changeStatus(id: number, status: string): Observable<IProduct> {
    if (status === "activate") {
      return this.http.post<IProduct>(
        `${this._baseUrl}/products/${id}/reactivate`,
        null
      );
    } else {
      return this.http.post<IProduct>(
        `${this._baseUrl}/products/${id}/deactivate`,
        null
      );
    }
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this._baseUrl}/products/${id}`);
  }
}

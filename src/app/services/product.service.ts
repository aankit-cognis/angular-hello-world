// import { Injectable } from "@angular/core";

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../models/product.interface";
import { UtilityService } from "./utility.service";
import { Observable } from "rxjs";

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
    return this.http.get<IProduct[]>(`${this._baseUrl}/open/products`);
  }

  changeStatus(id: number, status: string): Observable<IProduct> {
    if (status === "activate") {
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

  removeBike(bikename: string): void {
    this.lastDeletedProduct = bikename;
    this.utilityService.showError(`${bikename} is deleted!`);
  }
}

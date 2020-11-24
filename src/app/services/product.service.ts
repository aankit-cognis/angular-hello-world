import { Injectable } from "@angular/core";
import { IProduct } from "../models/product.interface";
import { Notyf } from "notyf";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class ProductService {
  lastDeletedProduct: string = "";

  private _baseUrl: string = "https://localhost:44316/api";
  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    console.log("Inside Product Service ! Get Products Method()");
    return this.http.get<IProduct[]>(`${this._baseUrl}/open/products`);
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
  deleteProduct(productName: string): void {
    this.lastDeletedProduct = productName;
  }
}

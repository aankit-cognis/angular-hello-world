import { Injectable } from "@angular/core";
import { Notyf } from "notyf";

@Injectable({
  providedIn: "root",
})
export class UtilityService {
  notyf = new Notyf();
  constructor() {}

  showError(message: string) {
    this.notyf.error(message);
  }
  showSuccess(message: string) {
    this.notyf.success(message);
  }
}

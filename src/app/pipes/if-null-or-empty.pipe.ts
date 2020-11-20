import { Pipe, PipeTransform } from "@angular/core";
import { NgbDatepickerI18nDefault } from "@ng-bootstrap/ng-bootstrap/datepicker/datepicker-i18n";

@Pipe({
  name: "nullOrEmpty",
})
export class IfNullOrEmpty implements PipeTransform {
  transform(value: string, defaultValue: string) {
    if (value) {
      return value;
    } else {
      if (defaultValue) {
        return defaultValue;
      } else {
        return "N/A";
      }
    }
  }
}

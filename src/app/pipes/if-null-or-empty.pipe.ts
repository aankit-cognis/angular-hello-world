import { Pipe, PipeTransform } from "@angular/core";

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

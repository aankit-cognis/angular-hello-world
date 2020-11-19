import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "ifNullOrEmpty",
})
export class IfNullOrEmptyPipe implements PipeTransform {
  transform(value: string, defaultValue: string) {
    if (!value) return defaultValue;
    else return value;
  }
}

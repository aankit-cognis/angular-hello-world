import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "../models/product.interface";

@Pipe({
  name: "filterPile",
})
export class FilterBikesPipe implements PipeTransform {
  transform(bikes: IProduct[], searchText: string): any {
    console.log("Inside PIPE", { bikes: bikes, search: searchText });
    if (searchText) {
      return bikes.filter((x) =>
        x.productName.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      return bikes;
    }
  }
}

import { Pipe, PipeTransform } from "@angular/core";
import { IProduct } from "../models/product.interface";

@Pipe({
  name: "filterProduct",
  pure: false,
})
export class FilterProductPipe implements PipeTransform {
  transform(products: IProduct[], searchTerm: string): any {
    console.log("PIPE CALLED!");
    if (searchTerm) {
      return products.filter((filter) =>
        filter.productName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      return products;
    }
  }
}

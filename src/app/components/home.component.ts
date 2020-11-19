import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <h2 class="text-primary">Hello From Home</h2>
    <!-- <app-product></app-product> -->
    <app-product-list> </app-product-list>
  `,
})
export class HomeComponent {}

import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <h2 class="text-primary">Welcome Home</h2>
    <hr />
    <!-- <app-product-list></app-product-list> -->
    <app-parent> </app-parent>
  `,
})
export class HomeComponent {}

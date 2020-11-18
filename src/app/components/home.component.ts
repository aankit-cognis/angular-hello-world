import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <h2 class="text-primary">Hello From Home</h2>
    <img src="assets/images/map.png" width="50%" />
    <i class="fa fa-user fa-3x"> </i>
    <hr />
    <app-product></app-product>
  `,
})
export class HomeComponent {}

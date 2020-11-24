import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <ng-http-loader></ng-http-loader>
    <h2 class="text-primary">Product Management APP</h2>
    <router-outlet> </router-outlet>
  `,
})
export class HomeComponent {}

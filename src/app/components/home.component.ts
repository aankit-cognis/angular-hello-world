import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  template: `
    <ng-http-loader></ng-http-loader>
    <app-navbar> </app-navbar>
    <router-outlet> </router-outlet>
  `,
})
export class HomeComponent {}

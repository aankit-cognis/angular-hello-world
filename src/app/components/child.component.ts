import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  template: `
    <div class="alert alert-primary" role="alert">
      <h6>Inside Child Component</h6>
      <strong>{{ dateTime }}</strong>
    </div>
  `,
})
export class ChildComponent {
  dateTime: Date = new Date();
  constructor() {}
  logMessage() {
    console.log("Hello From Log inside ChildComponent !");
  }
}

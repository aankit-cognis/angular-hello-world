import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { setInterval } from "timers";
import { ChildComponent } from "./child.component";
@Component({
  selector: "app-parent",
  template: `
    <h3 #header>Inside Parent Component</h3>
    Message: {{ message }}
    <hr />
    <input
      type="text"
      placeholder="Enter a Message"
      class="mr-3"
      #inputMessage
    />
    <button type="button" class="btn btn-success mr-2" (click)="showMessage()">
      Show Message
    </button>
    <button type="button" class="btn btn-info" (click)="callLogMessage()">
      Log Message
    </button>
    <hr />
    <app-child> </app-child>
    <app-child> </app-child>
  `,
})
export class ParentComponent implements OnInit, AfterViewInit {
  message: string;

  @ViewChild("inputMessage") messageInputBox: ElementRef;
  @ViewChildren(ChildComponent) childComp: QueryList<ChildComponent>;

  constructor() {
    console.log("Inside Parent COmponent", this.childComp);
  }
  // ngAfterViewChecked(): void {
  //   console.log("Inside ngAfterViewChecked ParentComponent", this.childComp);
  // }
  ngAfterViewInit(): void {
    console.log(
      "Inside ngAfterViewInit ParentComponent",
      this.childComp.toArray()
    );
    window.setInterval(() => {
      this.childComp.toArray().forEach((x) => {
        x.dateTime = new Date();
      });
    }, 1000);
  }
  ngOnInit(): void {}

  showMessage() {
    console.log(
      "Inside showMessage ParentComponent",
      this.messageInputBox.nativeElement.value
    );
    this.message = this.messageInputBox.nativeElement.value;
  }

  callLogMessage() {
    this.childComp.logMessage();
  }
}

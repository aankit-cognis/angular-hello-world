import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IfNullOrEmptyPipe } from "./if-null-or-empty.pipe";

@NgModule({
  declarations: [IfNullOrEmptyPipe, IfNullOrEmptyPipe],
  exports: [IfNullOrEmptyPipe, IfNullOrEmptyPipe],
})
export class PipesModule {}

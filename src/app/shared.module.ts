import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { FilterProductPipe } from "./pipes/filter-product.pipe";
import { IfNullOrEmptyPipe } from "./pipes/if-null-or-empty.pipe";

@NgModule({
  declarations: [IfNullOrEmptyPipe, FilterProductPipe],
  imports: [FormsModule],
  exports: [IfNullOrEmptyPipe, FilterProductPipe, FormsModule],
})
export class SharedModule {}

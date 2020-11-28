import { NgModule } from "@angular/core";
import { IfNullOrEmpty } from "./pipes/if-null-or-empty.pipe";
import { FilterBikesPipe } from "./pipes/filter-bikes.pipe";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [IfNullOrEmpty, FilterBikesPipe],
  imports: [FormsModule, ReactiveFormsModule],
  exports: [IfNullOrEmpty, FilterBikesPipe, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}

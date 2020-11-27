import { NgModule } from "@angular/core";
import { IfNullOrEmpty } from "./pipes/if-null-or-empty.pipe";
import { FilterBikesPipe } from "./pipes/filter-bikes.pipe";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [IfNullOrEmpty, FilterBikesPipe],
  imports: [FormsModule],
  exports: [IfNullOrEmpty, FilterBikesPipe, FormsModule],
})
export class SharedModule {}

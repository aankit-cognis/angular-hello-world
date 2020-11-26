import { NgModule } from "@angular/core";
import { IfNullOrEmpty } from "./pipes/if-null-or-empty.pipe";
import { FilterBikesPipe } from "./pipes/filter-bikes.pipe";

@NgModule({
  declarations: [IfNullOrEmpty, FilterBikesPipe],
  exports: [IfNullOrEmpty, FilterBikesPipe],
})
export class SharedModule {}

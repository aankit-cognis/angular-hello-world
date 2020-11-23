import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { IfNullOrEmpty } from "./pipes/if-null-or-empty.pipe";
import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FilterBikesPipe } from "./pipes/filter-bikes.pipe";
import { ChildComponent } from "./components/child/child.component";

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    IfNullOrEmpty,
    FilterBikesPipe,
    ChildComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [UpperCasePipe, LowerCasePipe, IfNullOrEmpty],
  bootstrap: [HomeComponent],
})
export class AppModule {}

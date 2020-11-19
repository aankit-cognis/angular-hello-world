import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";

@NgModule({
  declarations: [HomeComponent, ProductComponent, ProductListComponent],
  imports: [BrowserModule],
  //providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}

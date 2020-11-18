import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProductComponent } from "./components/product/product.component";

@NgModule({
  declarations: [HomeComponent, ProductComponent],
  imports: [BrowserModule],
  //providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProductComponent } from "./components/product/product.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [HomeComponent, ProductComponent],
  imports: [BrowserModule, FormsModule],
  //providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}

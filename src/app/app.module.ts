import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProductComponent } from "./components/product/product.component";
import { FormsModule } from "@angular/forms";
import { IfNullOrEmptyPipe } from "./pipes/if-null-or-empty.pipe";

@NgModule({
  declarations: [HomeComponent, ProductComponent, IfNullOrEmptyPipe],
  imports: [BrowserModule, FormsModule],
  //providers: [],
  bootstrap: [HomeComponent],
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { FormsModule } from "@angular/forms";
import { IfNullOrEmptyPipe } from "./pipes/if-null-or-empty.pipe";
import { UpperCasePipe } from "@angular/common";
import { FilterProductPipe } from "./pipes/filter-product.pipe";
import { ProcuctComponent } from "./components/procuct/procuct.component";
import { CustomComponent } from "./components/custom/custom.component";
import { ParentComponent } from "./components/parent.componnet";
import { ChildComponent } from "./components/child.component";
import { ProductService } from "./services/product.service";
import { AccordianComponent } from "./components/accordian/accordian.component";
import { NewListComponent } from "./components/new-list/new-list.component";

@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    IfNullOrEmptyPipe,
    FilterProductPipe,
    ProcuctComponent,
    CustomComponent,
    ParentComponent,
    ChildComponent,
    AccordianComponent,
    NewListComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [UpperCasePipe, ProductService],
  bootstrap: [HomeComponent],
})
export class AppModule {}

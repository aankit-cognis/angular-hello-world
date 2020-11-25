import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
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
import { UtilityService } from "./services/utility.service";
import { NgHttpLoaderModule } from "ng-http-loader";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { RouterModule } from "@angular/router";
import { ProductDetailsGuradService } from "./guards/product-details-gurad.service";
import { ProductResolverService } from "./resolvers/product-resolver.service";
import { NavbarComponent } from "./components/navbar/navbar.component";

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
    ProductDetailsComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "products",
        component: ProductListComponent,
      },
      {
        path: "products/:id",
        component: ProductDetailsComponent,
        canActivate: [ProductDetailsGuradService],
        resolve: {
          productData: ProductResolverService,
        },
      },
      {
        path: "welcome",
        component: WelcomeComponent,
      },
      {
        path: "",
        redirectTo: "welcome",
        pathMatch: "full",
      },
      {
        path: "**",
        component: PageNotFoundComponent,
      },
    ]),
  ],
  providers: [
    UpperCasePipe,
    ProductService,
    UtilityService,
    {
      provide: ProductDetailsGuradService,
      useClass: ProductDetailsGuradService,
    },
    ProductResolverService,
  ],
  bootstrap: [HomeComponent],
})
export class AppModule {}

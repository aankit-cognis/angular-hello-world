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
import { AccordianComponent } from "./components/accordian/accordian.component";
import { NewListComponentComponent } from "./components/new-list-component/new-list-component.component";
import { ProductService } from "./services/product.service";
import { UtilityService } from "./services/utility.service";
import { HttpClientModule } from "@angular/common/http";
import { NgHttpLoaderModule } from "ng-http-loader";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { RouterModule } from "@angular/router";
import { CanActivateProductDetailsService } from "./services/can-activate-product-details.service";
import { ProductDetailResolverService } from "./resolvers/product-detail-resolver.service";

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    IfNullOrEmpty,
    FilterBikesPipe,
    ChildComponent,
    AccordianComponent,
    NewListComponentComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
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
        canActivate: [CanActivateProductDetailsService],
        resolve: {
          product: ProductDetailResolverService,
        },
      },
      {
        path: "home",
        component: WelcomeComponent,
      },
      {
        path: "",
        component: WelcomeComponent,
      },
      {
        path: "**",
        component: PageNotFoundComponent,
      },
    ]),
  ],
  providers: [
    UpperCasePipe,
    LowerCasePipe,
    IfNullOrEmpty,
    ProductService,
    UtilityService,
    CanActivateProductDetailsService,
    ProductDetailResolverService,
  ],
  bootstrap: [HomeComponent],
})
export class AppModule {}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { FilterBikesPipe } from "./pipes/filter-bikes.pipe";
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
import { NavbarComponent } from "./components/navbar/navbar.component";
import { IfNullOrEmpty } from "./pipes/if-null-or-empty.pipe";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthService } from "./services/auth.service";
import { IsLoggedinUserService } from "./services/is-loggedin-user.service";

@NgModule({
  declarations: [
    HomeComponent,
    ProductComponent,
    ProductListComponent,
    IfNullOrEmpty,
    FilterBikesPipe,
    WelcomeComponent,
    ProductDetailsComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "products",
        component: ProductListComponent,
        canActivate: [IsLoggedinUserService],
      },
      {
        path: "products/:id",
        component: ProductDetailsComponent,
        canActivate: [IsLoggedinUserService, CanActivateProductDetailsService],
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
    AuthService,
    IsLoggedinUserService,
  ],
  bootstrap: [HomeComponent],
})
export class AppModule {}

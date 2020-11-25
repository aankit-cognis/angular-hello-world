import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { FormsModule } from "@angular/forms";
import { IfNullOrEmptyPipe } from "./pipes/if-null-or-empty.pipe";
import { UpperCasePipe } from "@angular/common";
import { FilterProductPipe } from "./pipes/filter-product.pipe";
import { ProductService } from "./services/product.service";
import { UtilityService } from "./services/utility.service";
import { NgHttpLoaderModule } from "ng-http-loader";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { RouterModule } from "@angular/router";
import { ProductDetailsGuradService } from "./guards/product-details-gurad.service";
import { ProductResolverService } from "./resolvers/product-resolver.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { AuthService } from "./services/auth.service";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { IsLoggedInUserGuardService } from "./guards/is-logged-in-user-guard.service";
import { ProductsModule } from "./modules/products/products.module";

@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    WelcomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
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
    ProductsModule,
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
    AuthService,
    IsLoggedInUserGuardService,
  ],
  bootstrap: [HomeComponent],
})
export class AppModule {}

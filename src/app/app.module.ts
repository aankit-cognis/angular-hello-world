import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home.component";
import { LowerCasePipe, UpperCasePipe } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ProductService } from "./services/product.service";
import { UtilityService } from "./services/utility.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgHttpLoaderModule } from "ng-http-loader";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { RouterModule } from "@angular/router";
import { CanActivateProductDetailsService } from "./services/can-activate-product-details.service";
import { ProductDetailResolverService } from "./resolvers/product-detail-resolver.service";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { IfNullOrEmpty } from "./pipes/if-null-or-empty.pipe";
import { RegisterComponent } from "./components/register/register.component";
import { LoginComponent } from "./components/login/login.component";
import { AuthService } from "./services/auth.service";
import { IsLoggedinUserService } from "./services/is-loggedin-user.service";
import { ProductModule } from "./modules/product/product.module";
import { EmployeesModule } from "./modules/employees/employees.module";
import { SharedModule } from "./shared.module";
import { WiproHttpInterceptor } from "./services/http-interceptor.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material.modul";

@NgModule({
  declarations: [
    HomeComponent,
    WelcomeComponent,
    PageNotFoundComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
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
        path: "home",
        component: WelcomeComponent,
      },
      {
        path: "products",
        loadChildren: "./modules/product/product.module#ProductModule",
      },
      {
        path: "employees",
        loadChildren: "./modules/employees/employees.module#EmployeesModule",
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
    // ProductModule,
    // EmployeesModule,
    SharedModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    UpperCasePipe,
    LowerCasePipe,
    IfNullOrEmpty,
    {
      provide: ProductService,
      useClass: ProductService,
    },
    UtilityService,
    CanActivateProductDetailsService,
    ProductDetailResolverService,
    AuthService,
    IsLoggedinUserService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: WiproHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [HomeComponent],
})
export class AppModule {}

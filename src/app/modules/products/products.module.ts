import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { AccordianComponent } from "./components/accordian/accordian.component";
import { IfNullOrEmptyPipe } from "src/app/pipes/if-null-or-empty.pipe";
import { FilterProductPipe } from "src/app/pipes/filter-product.pipe";
import { ProcuctComponent } from "./components/procuct/procuct.component";
import { RouterModule } from "@angular/router";
import { IsLoggedInUserGuardService } from "src/app/guards/is-logged-in-user-guard.service";
import { ProductDetailsGuradService } from "src/app/guards/product-details-gurad.service";
import { ProductResolverService } from "src/app/resolvers/product-resolver.service";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared.module";

@NgModule({
  declarations: [
    ProductListComponent,
    ProcuctComponent,
    AccordianComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: "",
        component: ProductListComponent,
        canActivate: [IsLoggedInUserGuardService],
      },
      {
        path: ":id",
        component: ProductDetailsComponent,
        canActivate: [IsLoggedInUserGuardService, ProductDetailsGuradService],
        resolve: {
          productData: ProductResolverService,
        },
      },
    ]),
  ],
})
export class ProductsModule {}

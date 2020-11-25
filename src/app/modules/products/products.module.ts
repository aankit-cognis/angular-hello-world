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

@NgModule({
  declarations: [
    ProductListComponent,
    IfNullOrEmptyPipe,
    FilterProductPipe,
    ProcuctComponent,
    AccordianComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: "products",
        component: ProductListComponent,
        canActivate: [IsLoggedInUserGuardService],
      },
      {
        path: "products/:id",
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

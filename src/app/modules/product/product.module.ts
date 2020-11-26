import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductComponent } from "./components/product/product.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { FilterBikesPipe } from "src/app/pipes/filter-bikes.pipe";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IsLoggedinUserService } from "src/app/services/is-loggedin-user.service";
import { CanActivateProductDetailsService } from "src/app/services/can-activate-product-details.service";
import { ProductDetailResolverService } from "src/app/resolvers/product-detail-resolver.service";

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent,
    ProductDetailsComponent,
    IfNullOrEmpty,
    FilterBikesPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
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
    ]),
  ],
})
export class ProductModule {}

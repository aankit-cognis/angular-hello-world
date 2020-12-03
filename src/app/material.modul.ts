import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
@NgModule({
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
  ],
})
export class MaterialModule {}

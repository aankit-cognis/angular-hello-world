import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmpListComponent } from "./emp-list/emp-list.component";
import { EmpDetailsComponent } from "./emp-details/emp-details.component";
import { RouterModule } from "@angular/router";
import { SharedModule } from "src/app/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "",
        component: EmpListComponent,
      },
      {
        path: "details",
        component: EmpDetailsComponent,
      },
    ]),
    SharedModule,
  ],
  declarations: [EmpListComponent, EmpDetailsComponent],
})
export class EmployeesModule {}

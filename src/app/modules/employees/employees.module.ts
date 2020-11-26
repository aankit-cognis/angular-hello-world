import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EmpListComponent } from "./emp-list/emp-list.component";
import { EmpDetailsComponent } from "./emp-details/emp-details.component";
import { RouterModule } from "@angular/router";
import { IfNullOrEmpty } from "src/app/pipes/if-null-or-empty.pipe";
import { SharedModule } from "src/app/shared.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: "employees",
        component: EmpListComponent,
      },
      {
        path: "employees/details",
        component: EmpDetailsComponent,
      },
    ]),
    SharedModule,
  ],
  declarations: [EmpListComponent, EmpDetailsComponent],
})
export class EmployeesModule {}

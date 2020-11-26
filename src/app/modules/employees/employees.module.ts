import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";

@NgModule({
  declarations: [EmployeeListComponent, EmployeeDetailsComponent],
  imports: [
    RouterModule.forChild([
      {
        path: "",
        component: EmployeeListComponent,
      },
      {
        path: "details/:name",
        component: EmployeeDetailsComponent,
      },
    ]),
  ],
})
export class EmployeesModule {}

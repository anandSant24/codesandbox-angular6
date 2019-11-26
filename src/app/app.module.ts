import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeLIstComponent } from "./employee/employeeLIst.component";
import { NotIfPipe } from "./employee/notIfPipe.pipe";
import { EmployeeCountComponent } from "./employee/employeeCount.component";
@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeLIstComponent,
    NotIfPipe,
    EmployeeCountComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

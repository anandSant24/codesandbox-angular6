import { OnInit, Component } from "@angular/core";
import { EmployeeService } from "../services/employee.service";
import { ActivatedRoute } from "@angular/router";
import { IEmployee } from "./employee";

@Component({
  templateUrl: "./employee.details.html",
  providers: [EmployeeService]
})
export class EmployeeDetails implements OnInit {
  constructor(
    private empSvc: EmployeeService,
    private _activatedRoutes: ActivatedRoute
  ) {}
  employee: IEmployee[];
  statusMsg: string;
  routeCode: string;
  ngOnInit() {
    console.log("geeting param value");
    const id = this._activatedRoutes.snapshot.paramMap.get("empCode");
    console.log("id=", id);
    this.empSvc.getEmployeeDataByCode(id).subscribe({
      next: empdata => (this.employee = empdata),
      error: err => (this.statusMsg = err)
    });
  }
}

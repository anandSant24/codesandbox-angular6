import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { EmployeeService } from "../services/employee.service";

@Component({
  selector: "employee-list",
  templateUrl: "./employeeList.component.html",
  styleUrls: ["./employeeList.style.css"],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  constructor(private _employeeSvc: EmployeeService) {}
  employees: IEmployee[];
  errorMsg: string;
  ngOnInit() {
    this._employeeSvc.getEmployeeData().subscribe({
      next: data => (this.employees = data),
      error: err => (this.errorMsg = err)
    });
  }
  getMoreEmployees(): void {
    this.employees = [
      {
        empCode: "emp101",
        name: "Tom",
        gender: "M",
        annualSalary: 5000,
        dateOfBirth: "05/06/1988"
      },
      {
        empCode: "emp102",
        name: "Alex",
        gender: "M",
        annualSalary: 5900,
        dateOfBirth: "06/25/1990"
      },
      {
        empCode: "emp103",
        name: "Mike",
        gender: "M",
        annualSalary: 5500,
        dateOfBirth: "12/06/1986"
      },
      {
        empCode: "emp104",
        name: "Mary",
        gender: "F",
        annualSalary: 6000,
        dateOfBirth: "09/06/1980"
      },
      {
        empCode: "emp105",
        name: "Suzaine",
        gender: "F",
        annualSalary: 6900,
        dateOfBirth: "01/06/1984"
      }
    ];
  }
  trackByEmp(index: number, employee: any): string {
    return employee.empCode;
  }

  getAllEmployee(): number {
    return this.employees.length;
  }
  getAllMaleEmployee(): number {
    return this.employees.filter(emp => emp.gender.toLowerCase() === "m")
      .length;
  }
  getAllFemaleEmployee(): number {
    return this.employees.filter(emp => emp.gender.toLowerCase() === "f")
      .length;
  }
  selectedEmployeeCountRadioBtn: string = "All";
  onEmployeeCountBtnChange(selection: string): void {
    this.selectedEmployeeCountRadioBtn = selection;
  }
}

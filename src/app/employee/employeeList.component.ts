import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { EmployeeService } from "../services/employee.service";
import { Router } from "@angular/router";
import { UserPreferencesService } from "../services/userPreferences.service";

@Component({
  templateUrl: "./employeeList.component.html",
  styleUrls: ["./employeeList.style.css"],
  providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
  colour: string;
  constructor(
    private _employeeSvc: EmployeeService,
    private router: Router,
    private _userPreferencesService: UserPreferencesService
  ) {}
  get colour(): string {
    return this._userPreferencesService.colorPreference;
  }
  set colour(value: string): string {
    this._userPreferencesService.colorPreference = value;
  }
  employees: IEmployee[];
  errorMsg: string;
  empCode: string;
  ngOnInit() {
    //in Actual service empkCode should have been a real one but for testing purpose this is ok.
    console.log("employeeList onInit");
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

  onHome(): void {
    console.log("inside Home");
    this.router.navigate(["home"]);
  }
}

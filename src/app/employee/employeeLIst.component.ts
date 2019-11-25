import { Component } from "@angular/core";

@Component({
  selector: "employee-list",
  templateUrl: "./employeeLIst.component.html",
  styleUrls: ["./employeeList.style.css"]
})
export class EmployeeLIstComponent {
  employees: any[] = [
    {
      empCode: "emp101",
      name: "Tom",
      gender: "M",
      annualSalary: "5000",
      dateOfBirth: "05/06/1988"
    },
    {
      empCode: "emp102",
      name: "Alex",
      gender: "M",
      annualSalary: "5900",
      dateOfBirth: "25/06/1990"
    },
    {
      empCode: "emp103",
      name: "Mike",
      gender: "M",
      annualSalary: "5500",
      dateOfBirth: "12/06/1986"
    },
    {
      empCode: "emp104",
      name: "Mary",
      gender: "F",
      annualSalary: "6000",
      dateOfBirth: "09/06/1980"
    }
  ];
  getMoreEmployees(): void {
    this.employees = [
      {
        empCode: "emp101",
        name: "Tom",
        gender: "M",
        annualSalary: "5000",
        dateOfBirth: "05/06/1988"
      },
      {
        empCode: "emp102",
        name: "Alex",
        gender: "M",
        annualSalary: "5900",
        dateOfBirth: "25/06/1990"
      },
      {
        empCode: "emp103",
        name: "Mike",
        gender: "M",
        annualSalary: "5500",
        dateOfBirth: "12/06/1986"
      },
      {
        empCode: "emp104",
        name: "Mary",
        gender: "F",
        annualSalary: "6000",
        dateOfBirth: "09/06/1980"
      },
      {
        empCode: "emp105",
        name: "Suzaine",
        gender: "F",
        annualSalary: "6900",
        dateOfBirth: "01/06/1984"
      }
    ];
  }
  trackByEmp(index: number, employee: any): string {
    return employee.empCode;
  }
}

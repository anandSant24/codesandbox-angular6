import { Component } from "@angular/core";

@Component({
  selector: "employee-table",
  templateUrl: "employee.component.html",
  styleUrls: ["employee.component.css"]
})
export class EmployeeComponent {
  columnSpan: number = 2;
  styleClass: string = "styleClass boldClass";
  isBoldClass: boolean = true;
  isItalicClass: boolean = true;
  isColor: boolean = false;
  applyStyles() {
    let applyClasses = {
      boldClass: this.isItalicClass,
      italicClass: this.isBoldClass,
      colorClass: this.isColor
    };
    return applyClasses;
  }
}

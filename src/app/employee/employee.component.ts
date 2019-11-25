import { Component } from "@angular/core";

@Component({
  selector: "employee-table",
  templateUrl: "employee.component.html",
  styleUrls: ["employee.component.css"]
})
export class EmployeeComponent {
  columnSpan: number = 2;
  styleClass: string = "italicClass boldClass";
  isBoldClass: boolean = true;
  isItalicClass: boolean = true;
  isColor: boolean = false;
  isBold: boolean = false;

  applyClasses() {
    let applyClasses = {
      boldClass: this.isItalicClass,
      italicClass: this.isBoldClass,
      colorClass: this.isColor
    };
    return applyClasses;
  }
  addStyles() {
    let applyStyle = {
      "font-weight": "bold",
      "font-style": "italic",
      "font-size.px": "12"
    };
    return applyStyle;
  }

  isShowData: boolean = false;
  inputVal: string = "enter";
  onToggle() {
    console.log("called showDetails");
    this.isShowData = !this.isShowData;
  }
  addText(): void {}
}

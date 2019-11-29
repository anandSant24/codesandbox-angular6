import { Input, Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "employee-count",
  templateUrl: "./employeeCount.component.html"
})
export class EmployeeCountComponent {
  @Input()
  all: number;
  @Input()
  male: number;
  @Input()
  female: number;

  radioSelectionValue: string = "All";
  @Output()
  onRadioBtnSelected: EventEmitter<string> = new EventEmitter<string>();
  onInputRadioBtnChange() {
    console.log("emitting a value");
    this.onRadioBtnSelected.emit(this.radioSelectionValue);
  }
}

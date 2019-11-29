import { Component, OnChanges, Input, SimpleChanges } from "@angular/core";

@Component({
  selector: "simple",
  templateUrl: "simple.component.html"
})
export class SimpleComponent implements OnChanges {
  @Input()
  simpleText: string;
  ngOnChanges(changes: SimpleChanges) {
    for (let propertyName in changes) {
      let change = changes[propertyName];
      console.log("current = ", change.currentValue);
      console.log("previous = ", change.previousValue);
    }
  }
}

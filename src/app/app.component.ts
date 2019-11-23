import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  result: Array<string> = [];
  title = "CodeSandbox";
  inputText: string = "Enter user details";
  addItemsToArray(): void {
    console.log(this.inputText);
    this.result.push(this.inputText);
  }
}

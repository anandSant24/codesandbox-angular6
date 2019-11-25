import { Component, Input } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  /* interpolation is used to concatenate string */
  imageHttp: string = "https";
  isEnable: Boolean = false;
  isDisabled: Boolean = false;
  /* ##10 Dom Property vs HTML element attribute */
  /*  When a Browser loads a web page the browser create a DOM for that page
    Attributes are defined by HTML where as 
    Properties are defined by DOM

    Attributes initializes DOM properties, Once initializtion complete the attribute job is done.

    Property values can Change whereas
    Attribute Value Can't
*/
}

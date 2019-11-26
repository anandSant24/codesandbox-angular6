import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "findGender"
})
export class NotIfPipe implements PipeTransform {
  transform(value: string, gender: string): string {
    if (gender.toLowerCase() === "m") {
      return "Mr." + value;
    } else {
      return "Miss" + value;
    }
  }
}

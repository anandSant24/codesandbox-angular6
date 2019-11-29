import { IEmployee } from "../employee/employee";
/*Its Recommended to use Injectable decorator 
even though we don't have dependency  */
import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap, catchError } from "rxjs/operators";
@Injectable()
export class EmployeeService {
  private empUrl = "app/api/employee.data.json";
  constructor(private _http: HttpClient) {}

  getEmployeeData(): Observable<IEmployee[]> {
    return this._http
      .get<IEmployee[]>(this.empUrl)
      .pipe(
        tap(
          data =>
            console.log(
              "tap taps into the ovservable stream and allows us to look into the emitted values in the stream without transforming stream",
              JSON.stringify(data)
            ),
          catchError(this.handleError)
        )
      );
  }
  private handleError(err: HttpErrorResponse) {
    console.log("in handleError method error occured", err);
    let errorMsg = err.error;
    throw errorMsg;
  }
}

import { Component } from "@angular/core";
import { UserPreferencesService } from "../services/userPreferences.service";
import { Router } from "@angular/router";
@Component({
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  colour: string;

  constructor(
    private _userPreferenceSvc: UserPreferencesService,
    private _router: Router
  ) {}
  homeTitle: string = "home";
  get colour(): string {
    return this._userPreferenceSvc.colorPreference;
  }
  set colour(value: string) {
    this._userPreferenceSvc.colorPreference = value;
  }
  onBackBtnClick(): void {
    this._router.navigate(["/employees"]);
  }
}

import { Component } from "@angular/core";
import { UserPreferencesService } from "../services/userPreferences.service";

@Component({
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  colour: string;
  private _userPreferenceSvc: UserPreferencesService;
  constructor() {
    this._userPreferenceSvc = new UserPreferencesService();
  }
  homeTitle: string = "home";
  get colour(): string {
    return this._userPreferenceSvc.colorPreference;
  }
  set colour(value: string) {
    this._userPreferenceSvc.colorPreference = value;
  }
}

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

// import { UserPreferencesService } from "./services/userPreferences.service";
import { TestModule } from "./test.module";
import { HighlightDirective } from "./buildAttr.directive";
import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeListComponent } from "./employee/employeeList.component";
import { NotIfPipe } from "./employee/notIfPipe.pipe";
import { EmployeeCountComponent } from "./employee/employeeCount.component";
import { SimpleComponent } from "./employee/simple.component";
import { HomeComponent } from "./home/home.component";
import { pageNotFoundComponent } from "./home/pageNotFound.component";
import { EmployeeDetails } from "./employee/employee.details";

const appRoutes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeeListComponent },
  { path: "employees/:empCode", component: EmployeeDetails },
  // the app naviages to the home page automatically, this route redirects a URL that fully matches the empty path to the route whose path is /home
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", component: pageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EmployeeListComponent,
    NotIfPipe,
    EmployeeCountComponent,
    SimpleComponent,
    HomeComponent,
    pageNotFoundComponent,
    EmployeeDetails,
    HighlightDirective
  ],
  // providers: [UserPreferencesService],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TestModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

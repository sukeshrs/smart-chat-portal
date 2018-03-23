import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { DataService } from './app-navbar/data.service';
import { ModelService } from './model/model.service';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'analytics', component: AnalyticsComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    HomePageComponent,
    LoginComponent,
    AnalyticsComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, { useHash: true }),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    ModelService,
    DataService,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

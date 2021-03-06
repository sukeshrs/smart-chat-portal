import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedFeatureModule } from './shared-feature/shared-feature.module';
import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';

import { ModelService } from './model/model.service';
import { AnalyticsFeatureModule } from './analytics-feature/analytics-feature.module';
import { BotConfigFeatureModule } from './bot-config-feature/bot-config-feature.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppNavbarComponent,
    AppFooterComponent,
    HomePageComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedFeatureModule,
    FormsModule,
    HttpClientModule,
    AnalyticsFeatureModule,
    BotConfigFeatureModule,
    AppRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    ModelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

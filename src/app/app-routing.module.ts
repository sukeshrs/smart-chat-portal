import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { AnalyticsComponent } from './analytics/analytics.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'analytics', component: AnalyticsComponent },

];

 @NgModule({
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
 })
 export class AppRoutingModule {}

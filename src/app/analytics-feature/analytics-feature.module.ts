import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AnalyticsService } from './analytics/analytics.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnalyticsComponent
  ],
  providers: [
    AnalyticsService
  ]
})
export class AnalyticsFeatureModule { }

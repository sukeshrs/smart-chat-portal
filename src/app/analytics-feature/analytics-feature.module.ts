import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AnalyticsService } from './analytics/analytics.service';
import { SessionsTableComponent } from './sessions-table/sessions-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnalyticsComponent,
    SessionsTableComponent
  ],
  providers: [
    AnalyticsService
  ]
})
export class AnalyticsFeatureModule { }

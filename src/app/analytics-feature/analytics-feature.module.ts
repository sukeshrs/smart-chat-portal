import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalyticsComponent } from './analytics/analytics.component';
import { AnalyticsService } from './analytics/analytics.service';
import { SessionsTableComponent } from './sessions-table/sessions-table.component';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';

@NgModule({
  imports: [
    SharedFeatureModule
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

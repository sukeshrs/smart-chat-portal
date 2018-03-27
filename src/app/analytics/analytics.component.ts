import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AnalyticsService } from './analytics.service';
import { ModelService } from '../model/model.service';
import { Analytics } from "../model/analytics.model";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  analytics: Analytics[];
  constructor(
    private modelService: ModelService,
    private analyticsService: AnalyticsService) { }

  ngOnInit() {

     //Get all analytics onLoad
      this.analyticsService.getAnalytics().subscribe(
        data => {
          this.analytics = data
          this.modelService.analyticsResponse = this.analytics;
          console.log(this.analytics);
        },
        error => console.log("ERROR ::" + error)
      );
  }

}

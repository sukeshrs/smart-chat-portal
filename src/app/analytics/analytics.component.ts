import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AnalyticsService } from './analytics.service';
import { ModelService } from '../model/model.service';
import { Analytics } from "../model/analytics.model";
import { Stats } from "../model/stats.model";

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  analytics: Analytics[];
  stats: Stats;
  allStats: any;
  constructor(
    private modelService: ModelService,
    private analyticsService: AnalyticsService) { }

  ngOnInit() {

    //Get all analytics onLoad
    this.analyticsService.getAnalyticsForBot().subscribe(
      data => {
        this.analytics = data
        this.modelService.analyticsResponse = this.analytics;
        console.log(this.analytics);
        this.selectStatForPeriod('all');
      },
      error => console.log("ERROR ::" + error)
    );
  }

  selectStatForPeriod(period: string) {
    let analysticsResponse =  this.analytics;
    let statistics = <Stats>{};
    Object.keys(analysticsResponse).forEach(function (statEntry) {
      if (statEntry.includes(period)) {
        if (statEntry.includes('distinct')) {
          statistics['sessions'] = analysticsResponse[statEntry];
        } else if
          (statEntry.includes('unanswered_questions')) {
            statistics['unanswered'] = analysticsResponse[statEntry];
        }
        else if (statEntry.includes('questions')) {
          statistics['questions'] = analysticsResponse[statEntry];
        }
      }
    });
    this.stats = statistics;
    console.log("stats for period" +period+ ":" + statistics );

  }
}

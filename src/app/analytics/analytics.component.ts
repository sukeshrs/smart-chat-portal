import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AnalyticsService } from './analytics.service';
import { ModelService } from '../model/model.service';
import { Analytics } from "../model/analytics.model";
import { Chart } from 'chart.js';
import { Stats } from "../model/stats.model";


@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  analytics: Analytics;
  sessionsChart: Chart[];
  stats: Stats;
  allStats: any;
  constructor(
    private modelService: ModelService,
    private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.analyticsService.getAnalyticsForBot().subscribe(
      data => {
        this.analytics = data
        this.modelService.analyticsResponse = this.analytics;
        console.log(this.analytics);
        this.selectStatForPeriod('all');
      },
      error => console.log("ERROR ::" + error)
    );
    this.createSessionChart();
  }

  //Example of charts
  createSessionChart(){


    let labels = ["months 1", "month 3", "month 6", "month 12"];
    let data = [10,15,20,25];
    // let data = [this.analytics.distinct_session_month,
    //             this.analytics.distinct_session_3_month,
    //             this.analytics.distinct_session_6_month,
    //             this.analytics.distinct_session_12_month];
    this.sessionsChart = new Chart('canvas', {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{data}],
            borderColor: 'rgb(255, 99, 132)',
            borderWidth: 3
          },
          options: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Sessions'
            },
            responsive:true,
            maintainAspectRatio: false,
            scales: {
              xAxes: [{
                display: true
              }],
              yAxes: [{
                display: true,
                ticks: {
                 max: 100,
                 min: 0,
                 stepSize: 10
                }
              }],
            }
          }
        });

  }

  /*
  * function : selectStatForPeriod
  * This method restructures the response object and creates an object for a time frame
  * when all is passed as an argument to the function , function iterates through the response
  * and just puts the entries for all time frame in stats object
  */
  //TODO -  Remove all the console logs
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

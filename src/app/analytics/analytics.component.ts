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
  userSessionsChart: Chart[];
  typeSessionsChart: Chart[];
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
        this.createUserSessionChart();
        this.createTypeSessionChart();

      },
      error => console.log("ERROR ::" + error)
    );


  }

  //Example of charts
  createUserSessionChart(){

    let labels = ["year ago", "6 months ago", "3 months ago", "1 month ago", "1 week ago"];

    // let data = [Number(this.analytics.distinct_session_12_month),
    //             Number(this.analytics.distinct_session_6_month),
    //             Number(this.analytics.distinct_session_3_month),
    //             Number(this.analytics.distinct_session_month),
    //             Number(this.analytics.distinct_session_week)
    //             ];
    let data = [10, 30, 90, 40, 60];
    this.userSessionsChart= new Chart('canvas1', {
          type: 'line',
          data: {
            labels: labels,
            datasets: [{data,
              backgroundColor:'rgb(51,181,229,.5)',
              borderColor: 'rgb(51,181,229)',
              borderWidth: 3

            }]

          },
          options: {
            legend: {
              display: false
            },
            title: {
              display: true,
              text: 'Total Distinct Sessions'
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

  createTypeSessionChart(){

    let labels = ["Facebook", "Web"];

    let data = [200, 300];
    this.typeSessionsChart = new Chart('canvas2', {
          type: 'pie',
          data: {
            labels: labels,
            datasets: [{data,
              backgroundColor:['rgb(59,89,152)','rgb(51,181,229)'],
              hoverBackgroundColor:['rgb(59,89,152,.5)','rgb(51,181,229,.5)'],
              borderWidth: 3

            }]

          },
          options: {
            legend: {
              display: true
            },
            title: {
              display: true,
              text: 'Web Sessions/Facebook Sessions'
            },
            responsive:true,
            maintainAspectRatio: false
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

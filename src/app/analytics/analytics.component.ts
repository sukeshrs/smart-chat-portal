import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AnalyticsService } from './analytics.service';
import { ModelService } from '../model/model.service';
import { Analytics } from "../model/analytics.model";
import { Chart } from 'chart.js';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss']
})
export class AnalyticsComponent implements OnInit {

  analytics: Analytics;
  sessionsChart: Chart[];
  constructor(
    private modelService: ModelService,
    private analyticsService: AnalyticsService) { }

  ngOnInit() {
    this.getAnalytics();
    this.createSessionChart();
  }

  //Get all analytics
  getAnalytics() : void {

     this.analyticsService.getAnalyticsForBot(1).subscribe(
       data => {
         this.analytics = data
         this.modelService.analyticsResponse = this.analytics;
         console.log(this.analytics);
       },
       error => console.log("ERROR ::" + error)
     );

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

}

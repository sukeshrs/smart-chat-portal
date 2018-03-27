import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { Analytics } from "../model/analytics.model";

@Injectable()
export class AnalyticsService {

  private apiUrlAnalytics = "http://localhost:8080/smart-chat-portal/analytics/bot";
  constructor(private http: HttpClient) { }

  //Get Analytics for specific Bot
  getAnalyticsForBot(botId): Observable <Analytics> {
  const params = new HttpParams()
  .set("botId", botId);
  return this.http
    .get(this.apiUrlAnalytics, { params })
    .map(result => <Analytics>result[botId]);
  }
}

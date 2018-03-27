import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { Analytics } from "../model/analytics.model";

@Injectable()
export class AnalyticsService {

  private apiUrlAnalytics = "http://localhost:8080/smart-chat-portal/analytics/";
  constructor(private http: HttpClient) { }

  //Get all analytics
  getAnalytics(): Observable <Analytics[]> {
  const params = new HttpParams();
  return this.http
    .get(this.apiUrlAnalytics, { params })
    .map(result => <Analytics[]>result);
  }
}

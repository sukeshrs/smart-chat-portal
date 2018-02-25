import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { TimesNews } from "../model/times-news.model";

@Injectable()
export class DataService {

   private apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
   newsSource = 'New York Times';

  constructor(private http: HttpClient) {

  }

//Example http get method
  public getDataToday(term: string): Observable <TimesNews[]> {
  const params = new HttpParams().set('api-key', "8d88acef8b574bb59b9080cdd70e100e");
  return this.http
    .get(this.apiUrl, { params })
    .map(result => <TimesNews[]>result["response"]["docs"]);

  }

  public getDataSource() {
      return this.newsSource;
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import {HttpParams} from "@angular/common/http";

@Injectable()
export class DataService {

  private apiUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
  newsSource = 'New York Times';
  constructor(private http: HttpClient) {

  }

//http get method
  public getDataToday(term: string): Observable<any> {
    const params = new HttpParams().set('api-key', "8d88acef8b574bb59b9080cdd70e100e");
    return this.http
    .get(this.apiUrl, {params, responseType: 'json'});
  }

  // private handleError(error: Response) {
  //       return Observable.throw(error.statusText);
  // }
  public getDataSource() {
      return this.newsSource;
  }

  //TODO: research appropiate use of private and public
  //TODO: sharing data between components
  //TODO: research observable<any> and types
  //TODO: play around with headers and params
  //TODO: research documentation best practices
  //TODO: handling errors
  //TODO: research classes and interfaces
  //TODO: research data mapping for api response
  //TODO: App architecture of files
}

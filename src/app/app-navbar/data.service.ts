import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { Account } from "../model/account.model";

@Injectable()
export class DataService {

  private apiUrlAccount = "http://localhost:8080/smart-chat-portal/account/";

  constructor(private http: HttpClient) {

  }

  //Get Accounts
  public getAccounts(): Observable <Account[]> {
  const params = new HttpParams();
  return this.http
    .get(this.apiUrlAccount, { params })
    .map(result => <Account[]>result);

  }

  //Create Accounts
  //Get Accounts by Type
  //Get Accounts by name
  //Remove Account by ID

}

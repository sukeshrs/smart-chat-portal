import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Account } from "./account.model";
import { Analytics } from "../analytics-feature/model/analytics.model";

@Injectable()
export class ModelService {
  accountResponse: Account[];
  analyticsResponse: Analytics;
  customer_id : string = '99999999';
  constructor() { }

}

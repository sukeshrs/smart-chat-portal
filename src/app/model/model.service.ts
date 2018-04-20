import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Account } from "./account.model";
import { Analytics } from "../analytics-feature/model/analytics.model";
import { BotConfigRespository } from "../bot-config-feature/model/bot-config-repository.model";

@Injectable()
export class ModelService {
  accountResponse: Account[];
  analyticsResponse: Analytics;
  customer_id : string = '99999999';
  botConfigRespository : BotConfigRespository[];
  currentBot : BotConfigRespository;
  constructor() {

   }

}

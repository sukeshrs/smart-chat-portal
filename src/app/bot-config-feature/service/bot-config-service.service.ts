import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from "@angular/common/http";
import { BotConfigRespository } from "../model/bot-config-repository.model"
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class BotConfigService {

  private botConfigURL = "http://localhost:8080/smart-chat-portal/botconfig";
  constructor(private http: HttpClient) { }

  startBotCreation(configInput: BotConfigRespository): Observable<BotConfigRespository> {
    return this.http
      .post<BotConfigRespository>(this.botConfigURL, configInput)
      .map(result => result)
  }


}

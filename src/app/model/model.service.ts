import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { TimesNews } from "./times-news.model";

@Injectable()
export class ModelService {
  articleResponse: TimesNews[];
  constructor() { }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { ModelService } from '../model/model.service';
import { TimesNews } from "../model/times-news.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  isCollapsed: boolean;
  searchInput: string;
  articles: TimesNews[];

  constructor(
    private modelService: ModelService,
    private dataService: DataService) { }

  ngOnInit() {
    this.isCollapsed = true;
    this.searchInput = '';
  }

  //Example call to service
  onSubmitSearch(): void {
    console.log('searching for ' + this.searchInput);
    console.log('Data Source: ' + this.dataService.newsSource);
    this.dataService.getDataToday(this.searchInput).subscribe(
      data => {
        let article: TimesNews;
        this.articles = data;
        this.modelService.articleResponse =this.articles;
        console.log(this.articles);
      },
      error => console.log("ERROR ::" + error)
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ModelService } from '../model/model.service';
import { TimesNews } from "../model/times-news.model";

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private modelService: ModelService) { }

  ngOnInit() {
  }

}

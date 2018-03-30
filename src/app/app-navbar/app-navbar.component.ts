import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ModelService } from '../model/model.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  isCollapsed: boolean;

  constructor(
    private modelService: ModelService) { }

  ngOnInit() {
    this.isCollapsed = true;
  }

}

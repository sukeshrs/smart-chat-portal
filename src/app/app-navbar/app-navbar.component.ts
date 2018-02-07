import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  isCollapsed : boolean;
  constructor() { }

  ngOnInit() {
    this.isCollapsed =true;
  }

}

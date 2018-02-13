import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';

//TODO: Map response to class
// interface News {
//     webUrl: string;
//     snippet:string;
//     blog:string;
//     source:string;
// }

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  isCollapsed: boolean;
  searchInput: string;
  articles$: Observable<string>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.isCollapsed = true;
    this.searchInput = '';
  }

  // Call to service
  onSubmitSearch(): void {
    console.log('searching for ' + this.searchInput);
    console.log('Data Source: ' + this.dataService.newsSource);
      this.dataService.getDataToday(this.searchInput).subscribe(
        data => {
          this.articles$ = data;
          console.log(this.articles$);
        }
      );
  }
}

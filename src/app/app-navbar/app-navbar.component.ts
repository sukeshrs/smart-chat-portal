import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Observable } from 'rxjs/Observable';
import { ModelService } from '../model/model.service';
import { Account } from "../model/account.model";

@Component({
  selector: 'app-navbar',
  templateUrl: './app-navbar.component.html',
  styleUrls: ['./app-navbar.component.scss']
})
export class AppNavbarComponent implements OnInit {

  isCollapsed: boolean;
  searchInput: string;
  accounts: Account[];

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

    this.dataService.getAccounts().subscribe(
      data => {
        this.accounts = data
        this.modelService.accountResponse = this.accounts;
        console.log(this.accounts);
      },
      error => console.log("ERROR ::" + error)
    );
  }
}

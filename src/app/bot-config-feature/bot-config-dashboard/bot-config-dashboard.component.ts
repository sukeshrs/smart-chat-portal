import { Component, OnInit } from '@angular/core';
import { BotConfigService } from "../service/bot-config.service";
import { BotConfigRespository } from "../model/bot-config-repository.model";

@Component({
  selector: 'bot-config-dashboard',
  templateUrl: './bot-config-dashboard.component.html',
  styleUrls: ['./bot-config-dashboard.component.scss']
})
export class BotConfigDashboardComponent implements OnInit {

  public botConfigList : BotConfigRespository[];
  constructor(private botConfigService : BotConfigService) { }

  ngOnInit() {
      this.getBotConfigList();
  }
  getBotConfigList() {
    this.botConfigService.getBotConfigList().subscribe(
      data => {
        this.botConfigList = data;
        // this.botConfigList.forEach(function (entry) {
        //   console.log("entry" + entry);
        //   let string = JSON.stringify(entry.value);
        //   let temp =JSON.parse(string);
        //   let value = JSON.parse(temp);
        //   entry.value = value;
        // });
        console.log(this.botConfigList);
      },
      error => console.log("ERROR ::" + error)
    );
  }

}
